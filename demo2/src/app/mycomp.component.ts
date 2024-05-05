import { Component } from "@angular/core";

@Component({
    selector: 'yyw-mycomp',
    //template: '<h2>我的组件</h2>' 使用template那么此时html和ts就写在同一个文件中，在大型项目中是非常不好的
    templateUrl: './mycomp.comonent.html',
    styleUrls: ['./mycomp.comonent.css'] //css可以有多个，但template只能有一个
})
export class Mycomp{
    
}
