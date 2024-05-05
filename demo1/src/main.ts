import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//bootstrapApplication()是一个函数调用，用于引导启动一个module。在Angular中，这是一种新的方式来启动应用，代替了传统的 platformBrowserDynamic().bootstrapModule()方法
bootstrapApplication(AppComponent, appConfig) //AppComponent这个组件是应用程序的主要视图，并且是组件树的根；appConfig包含了应用程序的配置信息。这可能包括提供商、环境设置、路由等
  .catch((err) => console.error(err));
