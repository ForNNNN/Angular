import { Component } from '@angular/core';

@Component({
  selector: 'yyw-mycomp4',
  templateUrl: './mycomp4.component.html',
  styleUrl: './mycomp4.component.css'
})
export class Mycomp4Component {
  //MVVM：model模型数据
  uname = 'yyw';
  age = 22;
  count = 0;
  baseUrl = 'nana.jpg';
  empList = ['aa','bb','cc','dd'];
  isVIP = true;
  hasMore = true;
  styleObj = {backgroundColor: 'skyblue',color: 'white'}; //css中使用'-'的地方在使用ngStyle样式绑定时可以用驼峰替代，也可以用''。耦合！
  classObj = {btn: true, 'btn-danger':true, 'btn-success':false}; //只能用''
  styleObj2 = {backgroundColor: 'orange',color: 'white'};
  grade = 'good';
  score = 60;
  password = '';
  notification = '';

  add(){
    this.count++;
  }

  minus(){
    this.count--;
  }

  showMore(){
    this.hasMore = false;
    this.changeStyle();
  }

  changeStyle(){
    this.styleObj['color'] = 'orange';
    this.styleObj['backgroundColor'] = 'white';
  }

  showMore2(){
    this.changeStyle2();
  }
  changeStyle2(){
    this.classObj['btn-danger'] = false;
    this.classObj['btn-success'] = true;
  }

  unameChange(){
    console.log(this.uname); //当input绑定的uname发生改变时就会看到uname发生了变化，证明了双向绑定中视图到模型的绑定。而绑定的styleObj2发生变化时该函数并未触发
  }

  colorChange(){
    this.styleObj2['backgroundColor'] = 'greenyellow'
  }

  passwordChange(){
    if(this.password.length<6 || this.password.length>12){
      this.notification = '密码长度应该在6到12位之间';
    }else{
      this.notification = '';
    }
  }

}