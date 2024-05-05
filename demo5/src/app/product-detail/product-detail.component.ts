import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  pid:any;

  //导入ActivatedRoute表示当前路由对象，该对象可以获取当前路径的路由参数
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    //this.route.params的类型是Observable
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.pid = data['pid'];
    })
  }

}
