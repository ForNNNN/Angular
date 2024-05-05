import { Directive, ElementRef } from '@angular/core';

@Directive({ 
  selector: '[yyw-MyDirect]'
})
export class MyDirectDirective {
  constructor(element:ElementRef) { //element中提供了一个属性nativeElement，它是对指令所附加的原生DOM元素的直接引用。因此，可以通过 element.nativeElement访问并操纵这个DOM元素。
    console.log('自定义组件被创建了');
    element.nativeElement.style.background = 'blue';
  } 
}
