import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-quickque',
  templateUrl: './quickque.component.html',
  styleUrls: ['./quickque.component.css'],
  animations: [trigger('picin', [
    state('void',style({
      transform: 'scale(2)',
    })),
    state('imagein',style({
      opacity:'1',
      transform: 'scale(1)'
    })),
    transition('* <=> *', animate('800ms ease'))
  ])]

})

export class QuickqueComponent implements OnInit {
  char_count:number;
  @ViewChild('file')
  imagedata: ElementRef;
  imagein:boolean=false;
  imageUpDatails:{ name:any, size:any, path:any }={name:null, size:null, path:null};quick_que: FormGroup;
  ActiveAttach:
    {
      attachlink: boolean,
      attachimage:boolean
    }={attachlink:false,attachimage:false};

  LinkSavage:string=null;
  cities3 = [
    {id: 1, name: 'استارتاپ', avatar: './assets/Icons/Svgs/briefcase.svg'},
    {id: 2, name: 'تیم سازی', avatar: './assets/Icons/Svgs/people.svg'},
    {id: 3, name: 'سرمایه گذاری', avatar: './assets/Icons/Svgs/investment.svg'}
  ];
  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef;
  @ViewChild('showchar', { read: ElementRef }) showchar: ElementRef;
  @ViewChild('buttons', { read: ElementRef }) buttons: ElementRef;
  constructor(private formbuilder:FormBuilder,) {

    this.quick_que=formbuilder.group({
      title:[null],
      question:[null],
      category:[null],
      link:[null]
    });
  }

  ngOnInit() {
    this.quick_que.get('question').valueChanges.subscribe(
      value=> {
        const showchar = this.showchar.nativeElement;
        if(value.length > 0){
          showchar.style.display = 'inline-block';
          this.buttons.nativeElement.style.opacity=1;this.buttons.nativeElement.style.maxHeight='1000px'}
        else {
          showchar.style.display = 'none';
          this.buttons.nativeElement.style.opacity=0;
          this.buttons.nativeElement.style.maxHeight=0}
      }
    )
    // if(this.char_count>0) {this.buttons.nativeElement.style.display='flex';}
  }
  autogrow() {
    const textArea = this.textArea.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.minHeight = '0px';
    console.log(textArea.style.minHeight);
    console.log(textArea.scrollHeight);
    textArea.style.minHeight = textArea.scrollHeight + 'px';
    this.char_count=textArea.value.length;
  }
  toggle(type:string){
    switch (type){
      case 'link':{
        this.ActiveAttach.attachlink=!this.ActiveAttach.attachlink;
        this.ActiveAttach.attachimage=false;
        break;
      }
      case 'image':{
        this.ActiveAttach.attachimage=!this.ActiveAttach.attachimage;
        this.ActiveAttach.attachlink=false;
        break;
      }
    }

  }


  insertlink(){
    this.LinkSavage=this.quick_que.get('link').value;
    this.ActiveAttach.attachlink=false;
  }
  CancelLink(){
    this.ActiveAttach.attachlink=false;
    this.quick_que.get('link').reset();
    this.LinkSavage=null;
  }
  importimage(image){
    console.log(image[0].name);
    if (image && image[0]) {
      let reader = new FileReader();
      reader.onload = (e:any) => {
        this.imageUpDatails.path = e.target.result;
        this.imageUpDatails.name=image[0].name;
        this.imageUpDatails.size=Math.round(image[0].size/1000);
        this.imagein=true;
      };
      reader.readAsDataURL(image[0]);
    }
    console.log(this.imageUpDatails.path);
    console.log(image[0].type);
    console.log(image[0]);
  }

  reomoveimage(){
    this.imageUpDatails.name=null;
    this.imageUpDatails.size=null;
    this.imageUpDatails.path=null;
    this.imagein=false;
    this.imagedata.nativeElement.value=null;
  }

  // show_textariea(){
  //
  //     const textArea = this.textArea.nativeElement;
  //     const showchar = this.showchar.nativeElement;
  //     const  buttons = this.buttons.nativeElement;
  //   //   textArea.style.height = '0px';
  //   //   textArea.style.height = textArea.scrollHeight + 50 + 'px';
  //   // textArea.style.padding= '25px 10px 20px 10px';
  //   //   showchar.style.display = 'inline-block';
  // }
  // noshow_textariea(){
  //     // const  textArea = this.textArea.nativeElement;
  //     // const  buttons = this.buttons.nativeElement;
  //     // textArea.style.height = '0px';
  //     // textArea.style.height = textArea.scrollHeight-50 + 'px';
  //     // const  showchar=this.showchar.nativeElement;
  // }
}
