import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = { name: '', email: '', password: '', isInstructor: false };
  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  registerUser(): void {
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    this.errorMessage = '';
    this.loading = true;

    this.authService.register(this.user).subscribe({
      next: () => {
        this.loading = false;
        this.toastService.success('Account created!');
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMessage = err.error?.error || 'Registration failed. Try a different email.';
      }
    });
  }
}
