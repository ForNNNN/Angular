import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yyw-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit{
  userList:any[]=[];
  http:HttpClient;

  constructor(http:HttpClient){
    this.http = http;
  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((response:any)=>{
      this.userList = response;
    });
  }

}
