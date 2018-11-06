import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {Token} from '../model/Token';


@Injectable()
export class AuthenticationService {

  private authenticationUrl = 'http://localhost:8080/auth';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient,
              private userService: UserService,
              private router: Router) { }

  authentication(username: string, password: string): Observable<boolean> {
    return this.http.post(this.authenticationUrl, JSON.stringify({username: username, password: password}), this.httpOptions)
      .map((response: Token) => {
          const token = response.token;
            if (token) {
              this.userService.setCurrentLoggedInUser(username, token);
              return true;
            } else {
              return false;
            }
        })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Serwer error'));
  }

  logout(): void {
    if (this.userService.getCurrentLoggedInUser() !== undefined) {
      this.userService.setCurrentLoggedInUser(undefined, undefined);
      this.router.navigate(['/login']);
    }
  }
}
