import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private loggedInUser: any;
  private token: string;

  constructor() {}

  setCurrentLoggedInUser(user: string, token: string): void {
    this.loggedInUser = user;
    this.token = token;
  }

  getCurrentLoggedInUser(): string {
    return this.loggedInUser;
  }

  getToken(): string {
    return this.token;
  }
}
