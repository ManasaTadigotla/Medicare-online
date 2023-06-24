import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string="http://localhost:8188/user/carts";
  constructor(private http:HttpClient) { }

  getCartItemOfUserByPhone(phone:number):Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/${phone}`);
  }

  addNewUser(user:User):Observable<User>
  {
    return this.http.post<User>("http://localhost:8188/user/add",user);
  }

}
