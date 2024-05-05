import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SexPipe } from './sex.pipe';
import { MycompComponent } from './mycomp/mycomp.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SexPipe, //导入的是Pipe的类名，而不是Pipe名
    MycompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //导入异步请求模块
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
