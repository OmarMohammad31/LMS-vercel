import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/user.model';

const TOKEN_STORAGE_KEY = 'lms_token';
const USER_STORAGE_KEY = 'lms_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;
  private token: string | null = null;

  private currentUserSubject = new BehaviorSubject<AuthResponse['user'] | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Rehydrate session from localStorage on app start, so a page refresh
    // (or a new tab) doesn't drop a still-valid login.
    const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (savedToken) {
      this.token = savedToken;
      if (savedUser) {
        try {
          this.currentUserSubject.next(JSON.parse(savedUser));
        } catch {
          // Corrupted value — drop it rather than crash the app.
          localStorage.removeItem(USER_STORAGE_KEY);
        }
      }
    }
  }

  register(user: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, user)
      .pipe(tap(res => this.setSession(res)));
  }

  login(user: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, user)
      .pipe(tap(res => this.setSession(res)));
  }

  getToken(): string | null {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.token = null;
    this.currentUserSubject.next(null);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  private setSession(res: AuthResponse): void {
    this.token = res.token;
    this.currentUserSubject.next(res.user);
    localStorage.setItem(TOKEN_STORAGE_KEY, res.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(res.user));
  }
}
