import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';
import { TutoringService } from 'src/app/services/tutoring.service';
import { User } from 'src/app/models/user.model';
import { Session } from 'src/app/models/session.model';
import { TutoringRequest } from 'src/app/models/tutoring-request.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userProfile: User | null = null;
  loading = true;
  errorMsg = '';

  upcomingSessions: Session[] = [];
  hostedSessionsCount = 0;
  totalBookings = 0;

  tutoringStats = { open: 0, accepted: 0, confirmed: 0, expired: 0, failedTransfer: 0 };
  pendingConfirmations: TutoringRequest[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private sessionService: SessionService,
    private tutoringService: TutoringService
  ) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile(): void {
    this.loading = true;
    this.userService.getMe().subscribe({
      next: (data) => {
        this.userProfile = data;
        this.loadWidgets();
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Session expired or invalid token.';
        this.authService.logout();
      }
    });
  }

  private loadWidgets(): void {
    if (!this.userProfile) { this.loading = false; return; }

    const sessions$ = this.sessionService.list();

    if (this.userProfile.isInstructor) {
      sessions$.subscribe({
        next: (sessions) => {
          this.processSessions(sessions);
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
      return;
    }

    forkJoin({
      sessions: sessions$,
      requests: this.tutoringService.listMine()
    }).subscribe({
      next: ({ sessions, requests }) => {
        this.processSessions(sessions);
        this.processRequests(requests);
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private processSessions(sessions: Session[]): void {
    const userId = this.userProfile!.id;
    const now = new Date();

    const mine = sessions.filter(s => s.hostId === userId || s.attendeeIds.includes(userId));
    this.upcomingSessions = mine
      .filter(s => new Date(s.startTime) > now)
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
      .slice(0, 5);

    const hosted = sessions.filter(s => s.hostId === userId);
    this.hostedSessionsCount = hosted.length;
    this.totalBookings = hosted.reduce((sum, s) => sum + s.attendeeIds.length, 0);
  }

  private processRequests(requests: TutoringRequest[]): void {
    this.tutoringStats = { open: 0, accepted: 0, confirmed: 0, expired: 0, failedTransfer: 0 };
    const userId = this.userProfile!.id;

    for (const r of requests) {
      if (r.status === 'open') this.tutoringStats.open++;
      else if (r.status === 'accepted') this.tutoringStats.accepted++;
      else if (r.status === 'confirmed') this.tutoringStats.confirmed++;
      else if (r.status === 'expired') this.tutoringStats.expired++;
      else if (r.status === 'failed_transfer') this.tutoringStats.failedTransfer++;
    }

    this.pendingConfirmations = requests.filter(r => {
      if (r.status !== 'accepted' || !r.confirmationDeadline) return false;
      const learnerId = typeof r.learnerId === 'object' ? r.learnerId._id : r.learnerId;
      const isLearner = learnerId === userId;
      const isTutor = r.tutorId === userId;
      if (isLearner) return !r.learnerConfirmed;
      if (isTutor) return !r.tutorConfirmed;
      return false;
    });
  }

  roleInRequest(request: TutoringRequest): string {
    if (!this.userProfile) return '';
    const learnerId = typeof request.learnerId === 'object' ? request.learnerId._id : request.learnerId;
    return learnerId === this.userProfile.id ? 'Learner' : 'Peer Tutor';
  }

  isHostOf(session: Session): boolean {
    return !!this.userProfile && session.hostId === this.userProfile.id;
  }

  logout(): void {
    this.authService.logout();
  }
}
