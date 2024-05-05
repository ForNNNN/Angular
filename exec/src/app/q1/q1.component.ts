import { Component } from '@angular/core';

@Component({
  selector: 'yyw-q1',
  templateUrl: './q1.component.html',
  styleUrl: './q1.component.css'
})
export class Q1Component {
  todoList = ['homework','housework','play','sleep'];
  userInput = '';
  people = [{name:'AA',status:10},{name:'BB',status:20},{name:'CC',status:30}];

  deleteList(index:number){
    this.todoList.splice(index,1); //从index这个索引开始替换一个元素，如果第三个参数没有指明则代表删除
  }

  handleAdd(){
    this.todoList.push(this.userInput);
    this.userInput = '';
  }
}
