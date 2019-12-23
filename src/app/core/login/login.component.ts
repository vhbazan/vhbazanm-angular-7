import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'javainuse';
  password = '';
  invalidLogin = false;

  constructor(private readonly router: Router,
              private readonly loginService: AuthenticationService ) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
