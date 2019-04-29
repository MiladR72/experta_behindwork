import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  cities3 = [
    {id: 1, name: 'استارتاپ', avatar: './assets/Icons/Svgs/briefcase.svg'},
    {id: 2, name: 'تیم سازی', avatar: './assets/Icons/Svgs/people.svg'},
    {id: 3, name: 'سرمایه گذاری', avatar: './assets/Icons/Svgs/investment.svg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
