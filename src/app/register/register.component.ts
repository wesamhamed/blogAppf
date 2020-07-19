import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(6), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService , private router : Router) {}

  ngOnInit(): void {}

  register() {
    this.authService
      .register(this.registerForm.value)
      .subscribe((data: any) => {
        this.authService.isLogin = true;
        this.authService.isAdmin = data.isAdmin;
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAdmin', data.isAdmin);
        this.router.navigateByUrl('/');
      });
  }
}
