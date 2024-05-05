import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class TimeGuard implements CanActivate{
    private currentTime = new Date();

    constructor(private router:Router){}

    canActivate(){
        if(this.currentTime.getHours()<24 && this.currentTime.getHours()>0){ //getHours()返回一个0到23之间的整数，代表从午夜开始到当前时间的小时数
            console.log('时间检验通过');
            return true;
        }else{
            console.log('时间检验不通过,跳转到首页');
            this.router.navigateByUrl('');
            return false;
        }
    }
}