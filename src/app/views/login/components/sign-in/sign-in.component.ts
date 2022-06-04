import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ft-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  showPassword: boolean = false;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  viewPassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
