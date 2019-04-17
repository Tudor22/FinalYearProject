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
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('http://localhost:3000/api/data')
  }

  updateQuote(value) {
    return this.http.post<quoteStatus>('http://localhost:3000/api/quote', {
      value
    })
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost:3000/api/isloggedin')
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost:3000/api/logout')
  }

}