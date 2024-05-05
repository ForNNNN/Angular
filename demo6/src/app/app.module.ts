import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SecurityComponent } from './security/security.component';
import { LoginGuard } from './login.guard';
import { TimeGuard } from './time.guard';

let routes:any = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {
    path:'user/center',
    component:UserCenterComponent,
    children: [
      {path:'',redirectTo:'info',pathMatch:'full'}, 
      {path:'info',component:InfoComponent}, //子组件的path会自动拼接上父组件的path
      {path:'avatar',component:AvatarComponent},
      {path:'security',component:SecurityComponent}
    ],
    canActivate: [LoginGuard,TimeGuard] //canActivate 是一个用于路由守卫的接口，用于在导航到特定路由时执行一些逻辑。canActivate 路由守卫用于控制是否允许用户访问特定路由。
    //对该路由组件应用路由守卫：LoginGuard先于TimeGuard执行。一旦LoginGuard检验失败，TimeGuard也不会进行检验
  },
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent,
    InfoComponent,
    AvatarComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
