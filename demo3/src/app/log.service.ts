import { Injectable } from "@angular/core";

@Injectable({ //进行服务的类需要用该装饰器，即所有服务对象都是可被注入的
    providedIn: 'root', //指定当前服务对象的服务提供者为root，表示根模块appModule（可以由根模块提供服务，也可以由组件提供服务）。这意味着该项目中所有部分都将共享一个单一实例的服务，而不管服务是在哪个模块、组件或服务中注入的。
})
export class LogService{
    doLog(action:string){
        let uname = 'admin';
        let time = new Date().getTime();
        console.log(`${uname}在${time}时,${action}了商品`);
    }
}