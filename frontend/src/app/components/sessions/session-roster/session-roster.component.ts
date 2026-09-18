import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService, RosterEntry } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-roster',
  templateUrl: './session-roster.component.html',
  standalone: false,
  styleUrls: ['./session-roster.component.css']
})
export class SessionRosterComponent implements OnInit {
  roster: RosterEntry[] = [];
  loading = true;
  forbidden = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private sessionService: SessionService) {}

  ngOnInit(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');
    if (!sessionId) return;

    this.sessionService.getRoster(sessionId).subscribe({
      next: (data) => {
        this.roster = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 403) {
          this.forbidden = true;
        } else {
          this.errorMessage = 'Could not load roster.';
        }
      }
    });
  }

  roleClass(role: string): string {
    return 'role-badge--' + role.toLowerCase().replace(/\s+/g, '-');
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }
}
