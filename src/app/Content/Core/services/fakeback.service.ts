import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FakebackService {

  constructor() { }

  doFakeProject():Promise<any>{
    let aut =new Promise((resolve) => {
      setTimeout(()=>
        resolve(
         true
        ),3000)

    });
    return aut;
  }


}
