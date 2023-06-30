import { NgIf, AsyncPipe, JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { LoadingService } from "../../services/loading.service";

@Component({
    selector: 'loading',
    template: `
      <div class="overlay" *ngIf="isLoading$ | async " >
       Cargando los mejores productos...
      </div>
    `,
    styles:[`.overlay{
        font-weight:600;
        background-color:#ffffff9c;
        display:grid;
        place-items:center;
        top:0;
        left:0;
        width:100%;
        height:100%;
        position:fixed;
        z-index:10;
        backdrop-filter:blur(5px)

    }`],
    standalone: true,
    imports: [NgIf, AsyncPipe, JsonPipe],
  })
  export class LoadingComponent {
    private loadingSvc = inject(LoadingService);
    isLoading$ = this.loadingSvc.isLoading$
  }