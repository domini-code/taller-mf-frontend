import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  start(): void {
    this.isLoadingSubject.next(true);
  }

  stop(): void {
    this.isLoadingSubject.next(false);
  }
}
