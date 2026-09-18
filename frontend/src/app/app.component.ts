import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LMS Application';
  menuOpen = false;
  currentUser: User | null = null;

  constructor(public authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.userService.getMe().subscribe({
        next: (u) => (this.currentUser = u),
        error: () => (this.currentUser = null)
      });
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }

  logout(): void {
    this.authService.logout();
    this.currentUser = null;
    this.menuOpen = false;
  }
}
