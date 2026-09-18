import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TutoringService } from 'src/app/services/tutoring.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  standalone: false,
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  topic = '';
  submitting = false;
  errorMessage = '';

  constructor(
    private tutoringService: TutoringService,
    private toastService: ToastService,
    private router: Router
  ) {}

  submit(): void {
    if (!this.topic.trim()) {
      this.errorMessage = 'Please enter a topic.';
      return;
    }
    this.errorMessage = '';
    this.submitting = true;

    this.tutoringService.createRequest(this.topic.trim()).subscribe({
      next: () => {
        this.submitting = false;
        this.toastService.success('Tutoring request created.');
        this.router.navigate(['/tutoring/mine']);
      },
      error: (err) => {
        this.submitting = false;
        if (err.status === 409) {
          this.errorMessage = err.error?.error || 'You already have a pending tutoring request.';
        } else if (err.status === 400) {
          this.errorMessage = err.error?.error || 'Insufficient credit balance.';
        } else {
          this.errorMessage = 'Could not create request, please try again.';
        }
      }
    });
  }
}
