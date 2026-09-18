import { Component, OnInit } from '@angular/core';
import { TutoringService } from 'src/app/services/tutoring.service';
import { ToastService } from 'src/app/services/toast.service';
import { TutoringRequest } from 'src/app/models/tutoring-request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  standalone: false,
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: TutoringRequest[] = [];
  loading = true;
  acceptingId: string | null = null;

  startTime: { [id: string]: string } = {};
  durationMinutes: { [id: string]: number } = {};

  constructor(
    private tutoringService: TutoringService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    this.tutoringService.listOpenRequests().subscribe({
      next: (data) => {
        this.requests = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Could not load open requests.');
      }
    });
  }

  learnerName(request: TutoringRequest): string {
    return typeof request.learnerId === 'object' ? request.learnerId.name : request.learnerId;
  }

  accept(request: TutoringRequest): void {
    const startTime = this.startTime[request._id];
    const durationMinutes = this.durationMinutes[request._id];

    if (!startTime || !durationMinutes) {
      this.toastService.error('Please pick a start time and duration first.');
      return;
    }

    this.acceptingId = request._id;
    this.tutoringService.acceptRequest(request._id, { startTime, durationMinutes }).subscribe({
      next: () => {
        this.acceptingId = null;
        this.toastService.success('Request accepted, session scheduled.');
        this.loadRequests();
      },
      error: (err) => {
        this.acceptingId = null;
        this.toastService.error(err.error?.error || 'Could not accept request.');
        this.loadRequests();
      }
    });
  }
}
