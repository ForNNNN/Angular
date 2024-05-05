import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//声明路由词典
let routes = [
  {path:'',component:IndexComponent}, //当path为空字符串时代表默认首页
  {path:'index',component:IndexComponent}, //声明路由词典中的path路径不可以以斜杠开头，也不可以以斜杠结尾
  {path:'plist',component:ProductListComponent}, 
  {path:'pdetail/:pid',component:ProductDetailComponent}, //路由参数占位符
  {path:'ucenter',component:UserCenterComponent},
  {path:'a',redirectTo:'index'}, //对某个地址进行重定向（默认完整地址重定向）
  {path:'b',redirectTo:'index'}, //也可以对地址前缀重定向
  
  {path:'**',component:NotFoundComponent} //使用**表示任意地址，所以任意地址需要声明在路由词典的最后因为在路径匹配时是从上往下寻找的
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserCenterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) //导入路由模块并在根模块中注册路由词典
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}