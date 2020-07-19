import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (data: any) => {
          this.authService.isLogin = true;
          this.authService.isAdmin = data.isAdmin;

          localStorage.setItem('token', data.token);
          localStorage.setItem('isAdmin', data.isAdmin);

          this.toastr.success('login successfuly!');

          this.router.navigateByUrl('/');
        },
        (err) => {
          this.toastr.error(err.error);
        }
      );
  }
}
