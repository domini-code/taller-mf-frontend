import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading',
  template: `
    <div class="overlay" *ngIf="isLoading$ | async">
      <div class="lds-hourglass"></div>
    </div>
  `,
  styleUrls: ['./loading.component.css'],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class LoadingComponent {
  private loadingSvc = inject(LoadingService);
  isLoading$ = this.loadingSvc.isLoading$;
}
