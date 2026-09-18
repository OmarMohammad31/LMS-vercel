import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  standalone: false,
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent {
  title = '';
  description = '';
  startTime = '';
  durationMinutes: number | null = null;
  capacity: number | null = null;
  submitting = false;
  errorMessage = '';

  constructor(
    private sessionService: SessionService,
    private toastService: ToastService,
    private router: Router
  ) {}

  submit(): void {
    if (!this.title || !this.startTime || !this.durationMinutes || !this.capacity) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }
    this.errorMessage = '';
    this.submitting = true;

    this.sessionService.create({
      title: this.title,
      description: this.description,
      startTime: this.startTime,
      durationMinutes: this.durationMinutes,
      capacity: this.capacity
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.toastService.success('Session created.');
        this.router.navigate(['/sessions']);
      },
      error: (err) => {
        this.submitting = false;
        this.errorMessage = err.error?.error || 'Could not create session.';
      }
    });
  }
}
