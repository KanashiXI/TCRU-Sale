import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Emloyeeinterface } from '../interface/emloyeeinterface';
import { map, tap } from 'rxjs/operators';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://127.0.0.1:8000/api/register/';
  private validateEmailURL = 'http://127.0.0.1:8000/api/emailvailate/';
  constructor(private http: HttpClient) { }
  // getCustomer() {
  //   let httpParms = new HttpParams();
  //   const observable = this.http.get<Emloyeeinterface[]>(' ', { params: httpParms })
  //   return observable;
  // }
  getCustomer() {
    return this.http.get<Emloyeeinterface[]>(this.url).pipe(
      map(users => {
        const newUsers = [];
        for (let user of users) {
          // const email = user.mail;
          const uName = user.username;
          newUsers.push({ username: uName });
        }
        return newUsers;
      }),
      tap(users => console.log(users))
    )
  }

  getCustomerByUsername(username: string) {
    // return this.http.get<any[]>(this.urlRequest, {
    //   params: new HttpParams().set('username', username)
    // });
    const user = this.http.get<Emloyeeinterface[]>(`${this.url}${username}`)
    return user;

  }

  getCustomerByEmail(email: string) {
    return this.http.get<any[]>(`${this.validateEmailURL}${email}`)
    // (this.validateEmailURL, {
    //   params: new HttpParams().set('email', email)
    // });
  }

  postCustomer(body: Emloyeeinterface) {
    return this.http.post(this.url, body)
  }
  // constructor(private http: HttpClient) {
  // }

  // getDepartment(data: Emloyeeinterface) {
  //   let httpParms = new HttpParams();
  //   const observable = this.http.get<Emloyeeinterface[]>('/api/register', { params: httpParms })
  //   return observable;
  // }
}
