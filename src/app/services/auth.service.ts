import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.basedURL;
  isLogin = false;
  isAdmin = false;
  name;
  constructor(private http: HttpClient) {
    let token = localStorage.getItem('token');
    if (token) {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(token);
      this.name = user.name;
      this.isLogin = true;
      this.isAdmin = user.isAdmin;
    }
  }

  login(user) {
    return this.http.post(this.url + 'api/login', user);
  }

  register(user) {
    return this.http.post(this.url + 'api/register', user);
  }

  logout(){
    localStorage.clear();
    this.isLogin = false;
    this.isAdmin = false;
  }

}
