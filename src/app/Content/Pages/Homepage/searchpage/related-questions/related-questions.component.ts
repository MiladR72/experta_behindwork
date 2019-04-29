import { Component, OnInit } from '@angular/core';
import {Rqdetailclass} from '../../../../Core/Models/R-question/R-question';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-related-questions',
  templateUrl: './related-questions.component.html',
  styleUrls: ['./related-questions.component.css'],
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

export class RelatedQuestionsComponent implements OnInit {
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }
  constructor() { }


  rqdetails
  ngOnInit() {

    this.rqdetails=[
      new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg'),
      new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg'),
      new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg')
    ];
    this.loadmoredetails=[
      new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg'),
      new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg')
    ];
  }
  morequestions=false
  loadmoredetails
  loading=false
  loadmore1000(value1:number, value2?:number){
    this.loading=true;
    this.delay(value1).then(()=>{
      this.morequestions=true;
      this.loading=false;
      this.delay(1000).then(()=>{
        Array.prototype.push.apply(this.rqdetails,this.loadmoredetails);
        this.loadmoredetails=[]
        this.morequestions=false;
        this.loadmoredetails=[
          new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg'),
          new Rqdetailclass(2,'استارتاپ','بنظر شما بزرگترین مشکلات تیم سازی چیست؟','  مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر …','./assets/fake_images/specialists1.jpg')
        ];
      })
    })




  }

}
interface Post {
  title: string;
  body: string;
};
