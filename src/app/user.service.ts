import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface myData {
  email: string,
  status: boolean,
  quote: string
}

interface isLoggedIn {
  status: boolean
}

interface quoteStatus {
  success: boolean
}

interface logoutStatus {
  success: boolean
}

interface location {
  success: boolean,
  city: string
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() { // Get request to backend to get user information
    return this.http.get<myData>('http://4yearproject.azurewebsites.net/api/userdata/data')
  };

  updateQuote(value) { //Post request to backend to get user quote
    return this.http.post<quoteStatus>('http://4yearproject.azurewebsites.net/api/userdata/quote', {
      value
    })
  };

  isLoggedIn(): Observable<isLoggedIn> { //Get request to backend to check if user is loggedin
    return this.http.get<isLoggedIn>('http://4yearproject.azurewebsites.net/api/userdata/isloggedin')
  };

  logout() { //Get request to backend for user to logout
    return this.http.get<logoutStatus>('http://4yearproject.azurewebsites.net/api/userdata/logout')
  };

  getCity(latitude, longitude) { //Post request to backend to get user location
    return this.http.post<location>('http://4yearproject.azurewebsites.net/api/userdata/location', {
      latitude,
      longitude
    })
  };
};