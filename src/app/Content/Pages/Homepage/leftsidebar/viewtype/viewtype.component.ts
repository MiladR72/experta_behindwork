import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewtype',
  templateUrl: './viewtype.component.html',
  styleUrls: ['./viewtype.component.css']
})
export class ViewtypeComponent implements OnInit {
  defualt='active';
  constructor(private route:ActivatedRoute) { }

  nocategorization;
  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(window.innerWidth<992){
      this.nocategorization=true
      console.log(this.nocategorization)
    }
    else {
      this.nocategorization=false
    }
  }

  ngOnInit() {
    this.onResize(event)
    this.route.queryParams.subscribe(
      query=>{
        if(query['viewtypes']){
          query['viewtypes']=="ALL"?this.defualt="active":this.defualt=null;
        }


      })

  }

}
