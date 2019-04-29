import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserRegisterModel} from "../Models/AUTH/user-register.model";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {UserLoginModel} from '../Models/AUTH/user-login.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:1357';
  API_ENDPOINT_REGISTER = '/register';
  API_ENDPOINT_LOGIN = '/login';
  API_ENDPOINT_USERDETAILS = '/getMyProfile';
  header_x_www=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'});
  constructor(private http:HttpClient) {
  }
public Register(Userdata:UserRegisterModel){
  return this.http.post(this.API_URL+ this.API_ENDPOINT_REGISTER,Userdata).pipe(catchError(error => {
    console.log(error);
    return of(error)})
  )
}

public Login(Userdata:UserLoginModel){
  let body = `username=${Userdata.username}&pass=${Userdata.pass}`;
  return this.http.post(this.API_URL+ this.API_ENDPOINT_LOGIN,body,{headers:this.header_x_www}).pipe(catchError(error => {
    console.log(error);
    return of(error)})
  )
}

public getToken=()=>localStorage.getItem('Token');


  getUserDetails ():Observable<any>{
    let header=new HttpHeaders({['ltoken']:this.getToken()});
  return this.http.get(this.API_URL + this.API_ENDPOINT_USERDETAILS, {headers:header})
        .pipe(catchError(error=>{
          console.log(error.status);
        return of(error)})
              )
}

}
