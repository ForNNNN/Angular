import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'yyw-child1-modify',
  templateUrl: './child1-modify.component.html',
  styleUrl: './child1-modify.component.css'
})
export class Child1ModifyComponent {
  userInput:string = '';

  //二.2.1 创建事件发射器，并且所有事件发射器必须声明为输出型属性表示可以向父组件输出数据
  @Output()
  modifyEvent = new EventEmitter();

  modify(){
    //二.2.2 子组件给父组件发射数据
    this.modifyEvent.emit(this.userInput);
  }
}
