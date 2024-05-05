import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentBlogComponent } from './parent-blog/parent-blog.component';
import { Child1ModifyComponent } from './child1-modify/child1-modify.component';
import { Child2PhotoComponent } from './child2-photo/child2-photo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ParentBlogComponent,
    Child1ModifyComponent,
    Child2PhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
