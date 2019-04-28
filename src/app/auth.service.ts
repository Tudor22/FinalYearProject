import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

interface registerResponse {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  };

  isLoggedIn() {
    return this.loggedInStatus
  };

  login(email, password) { //Post request to backend from the user to login
    return this.http.post<myData>('http://4yearproject.azurewebsites.net/api/auth/login', {
      email,
      password
    })
  };

  registerUser(email, password) { //Post request to backend from the user to register
    return this.http.post<registerResponse>('http://4yearproject.azurewebsites.net/api/auth/register', {
      email,
      password
    })
  };
};