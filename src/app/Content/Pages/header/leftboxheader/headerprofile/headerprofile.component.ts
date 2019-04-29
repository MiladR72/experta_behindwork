import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-headerprofile',
  templateUrl: './headerprofile.component.html',
  styleUrls: ['./headerprofile.component.css'],
  animations: [trigger('fadeinout1000', [
    state('in',style({
      opacity:'1',
      display: 'initial'
    })),
    state('out',style({
      opacity:'0',
      display: 'none'
    })),
    transition('in <=> out', animate('400ms ease-in'))
  ]),]
})
export class HeaderprofileComponent implements OnInit {

  constructor() { }

 /* @HostListener('document:click', ['$event'])
  HideProfileMenu() {
    if (this.inprofilemenue == false && this.profilemenu == true && this.inprofileicon == false) {
      this.profilemenu = false;
      console.log("pm =" + this.profilemenu);
    }
  }*/

  ngOnInit() {
  }


  inprofilemenue=false
  inprofileicon=false
  profilemenu=false
  ProfileClicked(){
    console.log(this.profilemenu)
    this.profilemenu=!this.profilemenu;
  }
}
