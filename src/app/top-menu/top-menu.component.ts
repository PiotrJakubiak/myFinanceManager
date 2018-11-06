import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  loggedInUser: any;

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.userService.getCurrentLoggedInUser() !== undefined ) {
      this.loggedInUser = this.userService.getCurrentLoggedInUser();
    }
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
