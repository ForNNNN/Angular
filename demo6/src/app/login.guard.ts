import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root' //路由守卫
})
export class LoginGuard implements CanActivate{
    private isLogin = true;

    constructor(private router:Router){}

    canActivate(){
        if(this.isLogin){
            console.log('登录检验通过');
            return true;
        }
        else{
            console.log('登录检验不通过，跳转到首页');
            this.router.navigateByUrl('');
            return false;
        }
    }
}