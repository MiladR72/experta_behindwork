import { Component, OnInit } from '@angular/core';
import {blogdetails} from '../../../../Core/Models/blog/blog-details.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Rqdetailclass} from '../../../../Core/Models/R-question/R-question';

@Component({
  selector: 'app-most-viewed-blogs',
  templateUrl: './most-viewed-blogs.component.html',
  styleUrls: ['./most-viewed-blogs.component.css'],
  animations: [trigger('fadeinout1000', [
    state('in',style({
      opacity:'1',
      display: 'initial'
    })),
    state('out',style({
      opacity:'0',
      display: 'none'
    })),
    transition('in <=> out', animate('1000ms ease-in'))
  ]),
    trigger('fadeinout300', [
      state('in',style({
        opacity:'1',
        display: 'flex'
      })),
      state('out',style({
        opacity:'0',
        display: 'none'
      })),
      transition('in <=> out', animate('300ms ease-in'))
    ]),]
})
export class MostViewedBlogsComponent implements OnInit {
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  constructor() { }

  Blogdetails
  moreBlogdetails
  ngOnInit() {
    this.Blogdetails=[
    new blogdetails(4,'استارتاپ','۱۴ مهر ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
      new blogdetails(4,'استارتاپ','۱۴ مهر ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
      new blogdetails(4,'استارتاپ','۱۴ مهر ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
    ]
    this.moreBlogdetails=[
      new blogdetails(4,'استارتاپ','۱۴ مهر ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
      new blogdetails(4,'استارتاپ','۱۴ شسیشیشسی ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
    ]

  }
  morequestions=false
  loading=false
  loadmore1000(value1:number, value2?:number){
    this.loading=true;
    this.delay(value1).then(()=>{
      this.morequestions=true;
      this.loading=false;
      this.delay(1000).then(()=>{
        Array.prototype.push.apply(this.Blogdetails,this.moreBlogdetails);
        this.moreBlogdetails=[]
        this.morequestions=false;
        this.moreBlogdetails=[
          new blogdetails(4,'استارتاپ','۱۴ مهر ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
          new blogdetails(4,'استارتاپ','۱۴ مهر ۱۳۹۷', 'بنظر شما بزرگترین مشکلات تیم سازی چیست؟', './assets/fake_images/Entrepreneur-Blogs.jpg'),
        ];
      })
    })




  }

}
