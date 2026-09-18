import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { Session } from 'src/app/models/session.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  standalone: false,
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: Session[] = [];
  loading = true;
  currentUser: User | null = null;
  bookingId: string | null = null;

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getMe().subscribe({
      next: (user) => (this.currentUser = user)
    });
    this.loadSessions();
  }

  loadSessions(): void {
    this.loading = true;
    this.sessionService.list().subscribe({
      next: (data) => {
        this.sessions = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Could not load sessions.');
      }
    });
  }

  // Instructors have no involvement in peer tutoring, so those sessions
  // are filtered out of their view entirely (not just hidden nav items).
  get visibleSessions(): Session[] {
    if (this.currentUser?.isInstructor) {
      return this.sessions.filter(s => s.type !== 'PeerTutoring');
    }
    return this.sessions;
  }

  isHost(session: Session): boolean {
    return !!this.currentUser && session.hostId === this.currentUser.id;
  }

  isBooked(session: Session): boolean {
    return !!this.currentUser && session.attendeeIds.includes(this.currentUser.id);
  }

  book(session: Session): void {
    this.bookingId = session._id;
    this.sessionService.book(session._id).subscribe({
      next: (updated) => {
        this.bookingId = null;
        this.sessions = this.sessions.map(s => s._id === updated._id ? updated : s);
        this.toastService.success('Booked! Check your email for the invite.');
      },
      error: (err) => {
        this.bookingId = null;
        const message = err.status === 409
          ? (err.error?.error || 'Session is full or already booked.')
          : 'Booking failed, please try again.';
        this.toastService.error(message);
        this.loadSessions();
      }
    });
  }

  viewRoster(session: Session): void {
    this.router.navigate(['/sessions', session._id, 'roster']);
  }
}
