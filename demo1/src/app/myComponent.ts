import { Component } from "@angular/core";

//1.组件就是一个class。需要使用装饰器（本质是函数）来对该class进行修改，描述该class是一个component
@Component({ //需要传入一个对象
    selector: 'mycomp', //2.组件可以作为标签中的属性（[myComp]），也可以直接作为标签使用（myComp）
    template: '<h2>我的组件</h2>',
    standalone: true
})
export class MyComponent{
    
}