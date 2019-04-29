import {Injectable, OnInit} from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import {AuthService} from './auth.service';
import {UserDetailsModel} from '../Models/AUTH/user-details.model';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
@Injectable(
  {
    providedIn:'root'
  }
)
export class IsLoginService implements OnInit{
  UserDetails:BehaviorSubject<UserDetailsModel>;
  IsAuth:BehaviorSubject<boolean>;
  constructor(
    private permissionsService: NgxPermissionsService,
    private authservice:AuthService
  )
  {
    console.log('xxxx');
    this.getUserDetails();

    this.UserDetails=new BehaviorSubject<UserDetailsModel>(null);
    this.IsAuth=new BehaviorSubject(null);

  }
  public load():Promise<any>{
    return new Promise<any> (resolve=>{
    this.getUserDetails().subscribe(
      result=>{
        console.log(result);
        if(result){
          if(result.profile){
            this.UserDetails.next(result);
            console.log(true);
            console.log(this.UserDetails.getValue());
            const permisson=['USER'];
            resolve(permisson)
          }
          else{
            const permisson=['GUEST'];
            resolve(permisson)
          }

        }
        else{
          const permisson=['GUEST'];
          resolve(permisson)
        }
      }
    );

    }
    )

      }
  public getUserDetails():Observable<UserDetailsModel>{
    if(localStorage.getItem('Token'))
    {
   return this.authservice.getUserDetails().pipe(res=>res)
    }
    else return of(null);
  }

  ngOnInit(){

  }



}
