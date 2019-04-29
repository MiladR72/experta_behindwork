import { Component, OnInit } from '@angular/core';
import {EventpropertyService} from '../../../../Core/services/eventproperty.service';
import {InformationService} from '../../../../Core/services/information.service';

@Component({
  selector: 'app-headerinput',
  templateUrl: './headerinput.component.html',
  styleUrls: ['./headerinput.component.css']
})
export class HeaderinputComponent implements OnInit {
  async delay(ms: number) {await new Promise(resolve => setTimeout(()=>resolve(), ms));}

  constructor(private informations: InformationService,private data: EventpropertyService,) { }

  ngOnInit() {


  }

  //***************ShowSearchArea*************//
  searchheadervalue=''
  showsuggestarea=false
  inputfocused=false;
  insidesuggestarea=false;
  focussearch
  mghheader
  mghheaderleftbox
  crossicon
  suggestsearch
  show_searcharea(){
    this.inputfocused=true;
    if(window.innerWidth<461)
    { this.focussearch.setAttribute("style","display:none");
      this.mghheader.setAttribute("style","flex-direction:row-reverse");
      this.mghheaderleftbox.setAttribute("style","width:100%;");
      this.delay(900).then(()=>{
        this.crossicon.setAttribute("style","display:flex;");
      })
    }
    if(this.searchheadervalue.length>2) {
      if(window.innerWidth<461){
        this.delay(900).then(()=>{
          /*this.suggestsearch.setAttribute("style","display:flex;");*/
          this.showsuggestarea=true
          this.data.inputdarkness.next(true)
        })
      }
      else {
        /*this.suggestsearch.setAttribute("style","display:flex;");*/
        this.showsuggestarea=true
        this.data.inputdarkness.next(true)

      }
    }
  }
//***************ShowSearchArea*************//

  //***************InputFiltering*************//
  searchingHeader(value: string) {
    this.data.headersearchvalue.next(value);
  }
  //***************InputFiltering*************//
}
