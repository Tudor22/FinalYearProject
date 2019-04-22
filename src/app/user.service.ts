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

  getData() {
    return this.http.get<myData>('http://apptesting444.azurewebsites.net/api/userdata/data')
  }

  updateQuote(value) {
    return this.http.post<quoteStatus>('http://apptesting444.azurewebsites.net/api/userdata/quote', {
      value
    })
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://apptesting444.azurewebsites.net/api/userdata/isloggedin')
  }

  logout() {
    return this.http.get<logoutStatus>('http://apptesting444.azurewebsites.net/api/userdata/logout')
  }

  getCity(latitude,longitude) {
    return this.http.post<location>('http://apptesting444.azurewebsites.net/api/userdata/location', {
      latitude,
      longitude
    })
  }  
}