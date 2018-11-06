import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../service/user.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    console.log('interceptor- ' + this.userService.getToken())
    if (this.userService.getToken() !== undefined ) {
      authReq = req.clone( { headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.userService.getToken())});
    }

    return next.handle(authReq).do(
      (err: any) => {
        if (err instanceof  HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }
}
