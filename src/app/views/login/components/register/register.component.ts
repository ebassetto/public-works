import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { equalFieldsValidator } from 'src/app/shared/validators/equal-fields.validator';

@Component({
  selector: 'ft-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  showPassword: boolean = false;

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', Validators.required]
  }, {
    validators: equalFieldsValidator('password', 'repeatPassword') 
  });

  constructor(private fb: FormBuilder) { }

  viewPassword(): void {
    this.showPassword = !this.showPassword;
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);  
    }
  }
}
