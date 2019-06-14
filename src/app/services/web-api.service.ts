import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateUserRequest } from '../models/createUserRequest.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient) { }

  check() {
    return this.http.get<boolean>(
      'http://localhost:25099/api/values/lidor',
      { withCredentials: true });
  }

  createNewUser(user :CreateUserRequest) {
    return this.http.post<any>(
      'http://localhost:25099/api/user/createUser',
      user,
      httpOptions
    );
  }
}