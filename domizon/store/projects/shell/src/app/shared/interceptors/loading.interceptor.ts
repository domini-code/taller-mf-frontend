import { Observable, finalize } from "rxjs";
import { LoadingService } from "../services/loading.service";
import { HttpEvent, HttpHandler,  HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";

/* export function AuthorizationInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const loadingService = inject(LoadingService);
  loadingService.start();
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'this_is_angular',
    },
  });
  return next(clonedRequest).pipe(
    finalize(() => loadingService.stop())
  );
} */

export class LoadingInterceptor implements HttpInterceptor {
 private loadingSvc =  inject(LoadingService)

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingSvc.start();
    return next.handle(req).pipe(finalize(() => this.loadingSvc.stop()));
  }
}
