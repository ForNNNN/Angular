import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe implements PipeTransform {

  transform(value:any,format:string): string {
    if(format=='short'){
      if(value==10) return '党员';
      else if(value==20) return '团员';
      else return '群众';
    }else if(format=='long'){
      if(value==10) return '美国党员';
      else if(value==20) return '美国团员';
      else return '美国群众';
    }
    return '';
  }

}
