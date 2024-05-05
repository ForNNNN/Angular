import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mycomp } from './mycomp.component';
import { Mycomp2 } from './mycomp2.component';
import { Mycomp3 } from './mycomp3/mycomp3.component';
import { Mycomp4Component } from './mycomp4/mycomp4.component';
import { FormsModule } from '@angular/forms';
import { MyDirectDirective } from './my-direct.directive';

@NgModule({ //将该class描述为一个Module，其中declarations用于注册Component
  declarations: [ //注册自己的组件
    AppComponent,
    Mycomp, //引入自定义组件
    Mycomp2,
    Mycomp3,
    Mycomp4Component,
    MyDirectDirective
  ],
  imports: [
    BrowserModule, //web项目就必须导入该模块
    AppRoutingModule,
    FormsModule //导入表单模块（ngModel）
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent] //引导组件是AppComponent，所以项目的首页index.html中只能放AppComponent这个组件（app-root）
})
export class AppModule { }
