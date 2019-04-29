import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';
import {questiondetails} from '../../../../Core/Models/question/question-details.model';
import {FakebackService} from '../../../../Core/services/fakeback.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ResizedEvent} from 'angular-resize-event';

@Component({
  selector: 'app-most-viewed-questions',
  templateUrl: './most-viewed-questions.component.html',
  styleUrls: ['./most-viewed-questions.component.css'],
  animations: [
    trigger('autoheight', [
      state('defult',style({
        height:'*'
      })),  state('change',style({
        height:'*'
      })),
      transition('defult => change', animate('1100ms ease-in'))
    ]),
    trigger('newcomp', [
      state('defult',style({
        opacity:'1',
        transform:'translatex(0)',
        background:'#FFFFFF'

      })),  state('void',style({
        opacity:'0',
        transform:'translatey(-5%)',
        background:'#be80aa'
      })),
      transition('void => defult', animate('1100ms ease-in'))
    ]),


  ]
})


export class MostViewedQuestionsComponent implements OnInit {
  QuestionDetails: questiondetails[];
  height: number;
  fakeblogdetails:questiondetails[];
  loading: boolean=false;
  state='defult';
  constructor(private Fake:FakebackService) {

  }
  onResized(event: ResizedEvent) {
    this.height=event.newHeight;
    console.log(this.height)
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height=event.target.innerHeight;
    console.log(this.height)
  }
  ngOnInit() {
    this.QuestionDetails=[
      new questiondetails(14,'استارتاپ',
      'بنظر شما بزرگترین مشکلات تیم سازی چیست؟',
      'مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر',
        './assets/fake_images/fake1.jpg'),      new questiondetails(14,'استارتاپ',
      'بنظر شما بزرگترین مشکلات تیم سازی چیست؟',
      'مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر',
        './assets/fake_images/fake1.jpg'),      new questiondetails(14,'استارتاپ',
      'بنظر شما بزرگترین مشکلات تیم سازی چیست؟',
      'مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر',
        './assets/fake_images/fake1.jpg'),
    ];
    this.fakeblogdetails=[
      new questiondetails(14,'استارتاپ',
        'بنظر شما بزرگترین مشکلات تیم سازی چیست؟',
        'مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر',
        './assets/fake_images/fake1.jpg'),      new questiondetails(14,'استارتاپ',
        'بنظر شما بزرگترین مشکلات تیم سازی چیست؟',
        'مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر',
        './assets/fake_images/fake1.jpg'),      new questiondetails(14,'استارتاپ',
        'بنظر شما بزرگترین مشکلات تیم سازی چیست؟',
        'مدتی هست که به دنبال دنبال برای یک استارتاپ در حوزه فینتک میگردم. اما در بسیاری از رویداد های استارتاپی شنیده ام که یکی از اساسی ترین مشکلات هر',
        './assets/fake_images/fake1.jpg'),
    ];

  }
Loadmore(){
    this.state='defult';
    this.loading=true;
  setTimeout(()=>{Array.prototype.push.apply(this.QuestionDetails, this.fakeblogdetails);this.loading=false;
    },1000);


}
}
