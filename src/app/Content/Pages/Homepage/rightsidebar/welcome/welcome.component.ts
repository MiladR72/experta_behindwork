import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }

  tabletsearchmode=false;
  tablethomemode=false;
  ngOnInit() {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(w=>{
      if(window.innerWidth<992){
        if(w['url'].split('?')[0]==''){
          this.tablethomemode=true;
          this.tabletsearchmode=false
        }
        else if(w['url'].split('?')[0]=='/searchpage'){
          this.tabletsearchmode=true;
          this.tablethomemode=false
        }
      }


    })


  }
  goToAuth(){
    this.router.navigate(['/login'])
  }

}
