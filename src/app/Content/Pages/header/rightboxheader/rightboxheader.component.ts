import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightboxheader',
  templateUrl: './rightboxheader.component.html',
  styleUrls: ['./rightboxheader.component.css'],

})
export class RightboxheaderComponent implements OnInit {
  async delay(ms: number) {await new Promise(resolve => setTimeout(()=>resolve(), ms));}
  constructor() { }

  ngOnInit() {
  }

}
