import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categorization',
  templateUrl: './categorization.component.html',
  styleUrls: ['./categorization.component.css']
})
export class CategorizationComponent implements OnInit {
  defualt='active';
  showsidebarcategorization;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      query=>{
        if(query['categorization']){
          query['categorization']=="ALL"?this.defualt="active":this.defualt=null;
        }

      });
    this.route.queryParams.subscribe(
      query=>{

        ( query['search'] ||  query['search']=="")?this.showsidebarcategorization=false: this.showsidebarcategorization=true;

      })
  }

}
