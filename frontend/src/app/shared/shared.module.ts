import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { ToastComponent } from './components/toast/toast.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    EmptyStateComponent,
    ToastComponent,
    ConfirmDialogComponent
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    EmptyStateComponent,
    ToastComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule {}
