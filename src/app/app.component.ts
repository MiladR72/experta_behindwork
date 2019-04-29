import {Component} from '@angular/core';
import {IsLoginService} from './Content/Core/services/is-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public islogin:IsLoginService){
    console.log('cecece');
  // this.islogin.ngOnInit();
  this.islogin.UserDetails.subscribe(res=>{
    if(res)
    {
      console.log(res);
      console.log(this.islogin.UserDetails.getValue())
    }});
  }

}
