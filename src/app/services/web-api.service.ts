import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../models/user-datails.model';
import { Asset } from '../models/asset.model';

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

  createNewUser(user :UserDetails) {
    return this.http.post<any>(
      'http://localhost:25099/api/user/createUser',
      user,
      { withCredentials: true });
  }

<<<<<<< HEAD
  getUserResults(user :UserDetails) {
    return this.http.post<Asset[]>(
      'http://localhost:25099/api/user/getUserResults',
      user,
=======
  getLocations(){
    return this.http.get<Array<string>>(
      'http://localhost:25099/api/data/get_locations',
>>>>>>> f696916f2e7f4ad40273916f71cf33e42e11250f
      { withCredentials: true });
  }
}