import {Component, HostListener, OnInit} from '@angular/core';
import {InformationService} from '../../Core/services/information.service';
import {EventpropertyService} from '../../Core/services/eventproperty.service';
import {animate, state, style, transition, trigger} from '@angular/animations';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [trigger('fadeinout1000', [
      state('in',style({
        opacity:'1',
        display: 'initial'
      })),
      state('out',style({
        opacity:'0',
        display: 'none'
      })),
      transition('in <=> out', animate('400ms ease-in'))
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
    ]),
    trigger('headerinout', [
      state('in',style({
        transform: 'translateY(0)',

      })),
      state('out',style({
        transform: 'translateY(-82px)',

      })),
      state('default',style({

      })),
      transition('in <=> out', animate('300ms ease-in')),
      transition('default <=> out', animate('200ms ease-in')),
      transition('default <=> in', animate('200ms ease-in')),
    ]),]
})

export class HeaderComponent implements OnInit{

  constructor(private informations: InformationService, private data: EventpropertyService) { }
  darkback:boolean=false;
  headerinoutstate;
  pageYOffset1;
  pageYOffset2;
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if(window.innerWidth >= 992){
      document.getElementsByClassName('mmr_full_header_background').item(0).setAttribute("style",'transform: translateY(0px)');
    }
    this.pageYOffset1=window.pageYOffset;
    this.delay(100).then(()=>{
      this.pageYOffset2=window.pageYOffset;});
    if (window.innerWidth < 992 && window.pageYOffset<82 && this.pageYOffset2-this.pageYOffset1<-1){
      this.headerinoutstate='default';
      document.getElementsByClassName('mmr_full_header_background').item(0).setAttribute("style",'transform: translateY(-'+window.pageYOffset+'px)');
    this.delay(250).then(()=>{
    document.getElementsByClassName('mmr_full_header_background').item(0).setAttribute("style",'transform: translateY(-'+window.pageYOffset+'px)');
})
    }
    else if(window.innerWidth < 992  && this.pageYOffset2-this.pageYOffset1>1 ){
      this.headerinoutstate='in';
    }
    else if(window.innerWidth < 992 && window.pageYOffset>82 && this.pageYOffset2-this.pageYOffset1<-1){
      this.headerinoutstate='out';
    }

  }



  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 992) {
      this.headersearchinitial = "جستجو"
    } else {
      this.headersearchinitial = "یک چیزی جستجو کن"
    }
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    //***************HideProfileMenu*************//
    if(this.inprofilemenue==false && this.profilemenu==true && this.inprofileicon==false){
      this.profilemenu=false;
      console.log("pm ="+this.profilemenu);
    }
    //***************HideProfileMenu*************//
    //***************HideSearchArea*************//
    if (this.insidesuggestarea==false && this.inputfocused==false){
      /*this.suggestsearch.setAttribute("style","display:none;");*/
      this.showsuggestarea=false
      this.data.inputdarkness.next(false)
      if(window.innerWidth<461)
      {
        this.crossicon.setAttribute("style","display:none;");
        this.delay(990).then(()=>{
          this.focussearch.setAttribute("style","display:flex");
          this.mghheader.setAttribute("style","flex-direction:row");
          this.mghheaderleftbox.setAttribute("style","width:auto;");
        })
      }
      //***************HideSearchArea*************//
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  headersearchinitial="";
  notif=false;
  ngOnInit() {


    this.data.inputdarkness.subscribe((res)=>{this.darkback=res})

    this.focussearch= document.getElementsByClassName('mgh_header_rightbox').item(0);
    this.mghheader=document.getElementsByClassName('mmr_header').item(0);
    this.mghheaderleftbox=document.getElementsByClassName('mgh_header_leftbox').item(0)
    this.crossicon=document.getElementsByClassName('searchinput_cross_div').item(0);
    this.suggestsearch= document.getElementsByClassName('mmr_suggest_search').item(0);


    if (window.innerWidth < 992) {
      this.headersearchinitial = "جستجو"
    }else{
      this.headersearchinitial="یک چیزی جستجو کن"
    }
  }

  //***************ShowProfileMenu*************//
  inprofilemenue=false
  inprofileicon=false
  profilemenu=false
  ProfileClicked(){
    this.profilemenu=!this.profilemenu;
  }
  //***************ShowProfileMenu*************//
  //***************InputFiltering*************//

  searchheadervalue=''
  notresponsequestion=false
  headerquestions=this.informations.questions;
  headerquestions1=[];
  headerquestions2=[];
  slicequestion: number=35;
  notresponseclassification=false
  headerclassifications=this.informations.classification;
  headerclassifications1=[];
  headerclassifications2=[];
  sliceclassification=35;
  notresponsesubject=false
  headersubjects=this.informations.Subjects;
  headersubjects1=[];
  headersubjects2=[];
  slicesubject=70;
  searchingHeader(value: string) {
    this.searchheadervalue = value;
    if(value.length>2) {
      this.headerquestions=this.informations.questions.filter(element=>element.search(value)!==-1);
      if (this.headerquestions.length==0){ this.notresponsequestion=true }else {this.notresponsequestion=false}
      this.headerquestions1=[];
      this.headerquestions2=[];
      let arrquestion=[];
      let slicequestion=this.slicequestion;
      this.headerquestions.forEach(function (element) {
          let str =element;
          if(element.length>slicequestion){
            for (let i=slicequestion; i>0 ; i-- ){
              if (str.slice(i-1,i)==" "){
                arrquestion.push(str.slice(0,i)+" ... ");
                break
              }
            }
          }
          else {arrquestion.push(str)}
        }
      );
      this.headerquestions1=arrquestion;

      this.headerquestions1.forEach(element=> this.headerquestions2.push(element.replace(new RegExp(value, "gi"), match => {
        return '<span><b>' +'&nbsp;'+ match +'&nbsp;'+ '</b></span>';
      })));


      this.headerclassifications=this.informations.classification.filter(element=>element.search(value)!==-1);
      if (this.headerclassifications.length==0){ this.notresponseclassification=true }else {this.notresponseclassification=false}
      this.headerclassifications1=[];
      this.headerclassifications2=[];
      let arrclassification=[];
      let sliceclassification=this.sliceclassification;
      this.headerclassifications.forEach(function (element) {
          let str =element;
          if(element.length>sliceclassification){
            for (let i=sliceclassification; i>0 ; i-- ){
              if (str.slice(i-1,i)==" "){
                arrclassification.push(str.slice(0,i)+" ... ");
                break
              }
            }
          }
          else {
            arrclassification.push(str)
          }

        }
      );
      this.headerclassifications1=arrclassification;
      this.headerclassifications1.forEach(element=> this.headerclassifications2.push(element.replace(new RegExp(value, "gi"), match => {
        return '<span><b>' +'&nbsp;'+ match +'&nbsp;'+ '</b></span>';
      })));


      this.headersubjects=this.informations.Subjects.filter(element=>element.search(value)!==-1);
      if (this.headersubjects.length==0){ this.notresponsesubject=true }else {this.notresponsesubject=false}
      this.headersubjects1=[];
      this.headersubjects2=[];
      let arrsubject=[];
      let slicesubject=this.slicesubject;
      console.log(this.headersubjects)
      this.headersubjects.forEach(function (element) {
          let str =element;
          if(element.length>slicesubject){
            for (let i=slicesubject; i>0 ; i-- ){
              if (str.slice(i-1,i)==" "){
                arrsubject.push(str.slice(0,i)+" ... ");

                break
              }
            }
          }
          else {arrsubject.push(str)}
        }
      );
      this.headersubjects1=arrsubject;
      console.log(arrsubject);
      this.headersubjects1.forEach(element=> this.headersubjects2.push(element.replace(new RegExp(value, "gi"), match => {
        return '<span><b>' +'&nbsp;'+ match +'&nbsp;'+ '</b></span>';
      })));



      /*this.suggestsearch.setAttribute("style", "display:flex;");*/
      this.showsuggestarea=true
      this.data.inputdarkness.next(true)
    }
    if (value.length<3){
      /*this.suggestsearch.setAttribute("style","display:none;");*/
      this.showsuggestarea=false
      this.data.inputdarkness.next(false)
    }
  }
  //***************InputFiltering*************//
  //***************ShowSearchArea*************//
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






}


