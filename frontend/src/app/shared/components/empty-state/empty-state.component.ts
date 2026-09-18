import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  standalone: false,
  styleUrls: ['./empty-state.component.css']
})
export class EmptyStateComponent {
  @Input() message = 'Nothing here yet.';
}
