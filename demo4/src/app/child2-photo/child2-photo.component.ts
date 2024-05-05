import { Component,Input } from '@angular/core';

@Component({
  selector: 'yyw-child2-photo',
  templateUrl: './child2-photo.component.html',
  styleUrl: './child2-photo.component.css'
})
export class Child2PhotoComponent {
  //二.1.2在子组件中声明属性，但是父组件不能传值给普通的属性，只有输入型属性父组件才可以传递值给该属性
  @Input()
  child2Name:string = '';
}
