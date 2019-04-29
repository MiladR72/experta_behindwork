import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('newcomphome', [
      state('defult',style({
        opacity:'1'
      })),  state('void',style({
        opacity:'0'
      })),
      transition('void => defult', animate('1100ms ease-in'))
    ]),


  ]
})
export class HomeComponent implements OnInit {
togglecontainer:string='ALL';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      query=>query['viewtypes']?this.togglecontainer= query['viewtypes']:null
    )


  }

}
