一.
1. 安装脚手架 cli：npm install -g @angular/cli
   对于 react 和 vue 的开发方式有两种：1.使用 script 引入 react 2.使用脚手架 create-react-app 构建
   在 angular1 时也可以使用这两种方式，但在 angular2 之后只能使用脚手架开发
2. 创建项目：ng new 项目名 --standalone=false
   angular routing：路由功能
3. 编译项目：ng serve

二.
1.angular.json 是 angular 项目的配置文件：
"index": "src/index.html"，表示该项目的静态文件入口，
"browser": "src/main.ts"，表示该项目的 ts 文件入口，该文件引入了 app.component.ts 文件中的 AppComponent组件。而该组件通过注解指定了 selector 是 app-root，以及 template 为 app.component.html

三.angular 的构成
1.Module
angular 中模块是用来装组件的容器（和 node.j 或 es6 中的 module 不同），模块是用来进行功能划分的
整个项目初始时只有一个主模块即 AppModule，和一个主组件 app-root。
将app-root组件在index.html页面中引入；在app-root组件中也可以定义新的组件比如mycomp组件，并在app-root组件的html页面中引入...

2.Component
(1)组件是一段可以反复使用的页面片段，并且组件必须声明在模块中
(2)ng中组件的构成：
   Template（定义了组件的视图部分）
   Css
   Script
   Selector（选择器是一个用于在 HTML 中标识该组件的唯一字符串。通过在 HTML 中使用该选择器，可以将组件的实例插入到页面中）
   Class（组件的类是一个带有 @Component 装饰器的 TypeScript 类。这个类包含了与该组件相关的数据和方法。装饰器会为类提供元数据，这些元数据可以定义模板、样式、选择器等）
(3)组件的使用
   a.在app路径下创建component
   b.在module中注册该component（当前只有AppModule）
   c.component只能在DOM树中使用
      angular 14中推出了独立组件的概念：独立组件可以直接在任何 Angular 应用中使用，而无需在 NgModule 中声明。
