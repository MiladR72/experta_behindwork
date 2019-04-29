import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }
  errorResponeServer =(type:boolean,Code:number)=>{
    if(type){
      switch(Code)
      {

        case 1:
          {
          return 'کاربر با موفقیت ثبت شد.';
          break
          }

        case 2:
          {
          return 'ورود موفقیت آمیز ...';
          break
          }

        case 3:
          {
          return '';
          break
          }

      }
    }
    else
      {
        switch(Code)
        {

          case 551:
          {
            return 'نام کاربری معتبر نیست.';
            break;
          }

          case 555:
          {
            return 'نام کاربری قبلا ثبت شده است.';
            break;
          }

          case 553:
          {
            return 'ایمیل معتبر نیست.';
            break;
          }

          case 554:
          {
            return 'ایمیل قبلا ثبت شده است.';
            break;
          }

          case 552:
          {
            return 'رمز عبور معتبر نیست';
            break;
          }

          case 556:
          {
            return 'رمز عبور  معتبر نیست';
            break;
          }

        }


      }
  };

serverNoConeect=()=> 'مشکلی در ارتباط با سرور پیش آمده است.دوباره تلاش کنید.';



}
