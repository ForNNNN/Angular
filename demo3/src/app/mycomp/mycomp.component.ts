import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yyw-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrl: './mycomp.component.css',
  //providers: [LogService] 在当前组件中注册该服务
})
export class MycompComponent {
  log:LogService;
  http:HttpClient;

  //需要用到的服务必须在创建该对象时就声明依赖的服务
  constructor(log:LogService,http:HttpClient){
    this.log = log;
    this.http = http;
  }

  //不止添加和删除需要进行日志管理；登录，注销等等操作都需要记录到日志中，所以需要将日志创建成一个类。
  add(){
    console.log('正在添加...');
    this.log.doLog('添加');
  }

  delete(){
    console.log('正在删除...');
    this.log.doLog('删除');
  }

  load(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    this.http.get(url).subscribe((response)=>{
      console.log('得到了订阅的异步响应消息');
      console.log(response);
    }); //异步发送Get请求,subscribe()类似于axios中的then()
  }
}
