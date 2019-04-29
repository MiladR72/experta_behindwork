import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
  animations: [
    trigger('newcomphome', [
      state('defult',style({
        opacity:'1'
      })),  state('void',style({
        opacity:'0'
      })),
      transition('void => defult', animate('1100ms ease-in'))
    ]),]
})
export class SearchpageComponent implements OnInit {

  togglecontainer:string='ALL';
  searchparams
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    /*console.log(this.route.snapshot)
    console.log(this.route.routeConfig)*/
    this.route.queryParams.subscribe(
      query=>query['viewtypes']?this.togglecontainer= query['viewtypes']:null
    )
   /* this.route.queryParams.subscribe(
      query=>query['search']?this.searchparams= query['search']:null
    )*/
/*if(2>1){console.log(this.router.getCurrentNavigation())}*/
  }

}
