import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcceptRequestPayload, TutoringRequest } from '../models/tutoring-request.model';

@Injectable({ providedIn: 'root' })
export class TutoringService {
  private baseUrl = `${environment.apiUrl}/tutoring-requests`;

  constructor(private http: HttpClient) {}

  listOpenRequests(): Observable<TutoringRequest[]> {
    return this.http.get<TutoringRequest[]>(this.baseUrl);
  }

  listMine(): Observable<TutoringRequest[]> {
    return this.http.get<TutoringRequest[]>(`${this.baseUrl}/mine`);
  }

  createRequest(topic: string): Observable<TutoringRequest> {
    return this.http.post<TutoringRequest>(this.baseUrl, { topic });
  }

  acceptRequest(requestId: string, data: AcceptRequestPayload): Observable<TutoringRequest> {
    return this.http.post<TutoringRequest>(`${this.baseUrl}/${requestId}/accept`, data);
  }

  confirmRequest(requestId: string): Observable<TutoringRequest | null> {
    return this.http.post<TutoringRequest | null>(`${this.baseUrl}/${requestId}/confirm`, {});
  }
}
