import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo3';
  employeeList = [{name:'AA',sex:1},{name:'BB',sex:2},{name:'CC',sex:3},{name:'DD',sex:1}];
}
