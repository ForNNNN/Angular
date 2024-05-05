import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './myComponent';

@Component({
  selector: 'app-root', //指定选择器
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyComponent], //必须是standalone组件才能直接被引入，否则必须在NgModule中引入
  templateUrl: './app.component.html', //引入模版
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo1';
}
