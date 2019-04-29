import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordetc'
})
export class WordetcPipe implements PipeTransform {

  transform(element: string, etc: number ){
    let str =element;
    if(element.length>etc){
      for (let i=etc; i>0 ; i-- ){
        if (str.slice(i-1,i)==" "){
          return (str.slice(0,i)+" ... ");
          break
        }
      }
    }
    else {return str}

  }

}
