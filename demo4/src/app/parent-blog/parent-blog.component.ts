import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'yyw-parent-blog',
  templateUrl: './parent-blog.component.html',
  styleUrl: './parent-blog.component.css'
})
export class ParentBlogComponent {
  //二.1.0 在父组件中声明属性，用来给子组件传递数据
  username:string = 'yyw';

  //二.2.4 父组件设置监听函数处理子组件的modify事件
  handleModify(e:any){ //e就是子组件传递过来的数据
    console.log(e); 
    this.username = e;
  }

  //二.3.2 使用装饰器@ViewChild()，第一个参数将变量和template中的标记进行匹配，第二个参数指明是否静态（由于ngIf和ngFor这些的存在所以会存在动态的DOM）
  @ViewChild('c0',{static: true})
  child0:any;

  @ViewChild('c1',{static: true})
  child1:any;

  @ViewChild('c2',{static: true})
  child2:any;
  
  //二.3.3 被#做了标记的标签所匹配的变量，是ElementRef类型，所以其属性nativeElement就对应了template中元素的原生 DOM 对象的引用。
  print(){
    console.log(this.child0);
    console.log(this.child1.userInput); //被标记了的子组件，父组件中就可以获得该子组件的属性
    console.log(this.child2.child2Name);
  }
}
