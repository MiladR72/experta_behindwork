import { Component, OnInit } from '@angular/core';
import {EventpropertyService} from '../../../Core/services/eventproperty.service';

@Component({
  selector: 'app-leftboxheader',
  templateUrl: './leftboxheader.component.html',
  styleUrls: ['./leftboxheader.component.css']
})
export class LeftboxheaderComponent implements OnInit {
  async delay(ms: number) {await new Promise(resolve => setTimeout(()=>resolve(), ms));}

  constructor(private data: EventpropertyService, ) { }
  headersearchvalue

  ngOnInit() {
  this.data.headersearchvalue.subscribe(()=>{
    this.headersearchvalue=this.data.headersearchvalue.value;
    console.log(this.headersearchvalue)
  })
  }

}
