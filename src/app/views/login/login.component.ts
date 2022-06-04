import { Component } from '@angular/core';

@Component({
  selector: 'ft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLogin: boolean = true;

  constructor() { }

  changeForm(): void {
    this.isLogin = !this.isLogin;
  }
}
