import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { FormsModule } from '@angular/forms';
import { ZzmmPipe } from './zzmm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    ZzmmPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
