一.Angular中组件的生命周期钩子函数
1.调用顺序
    (0)constructor()：组件对象被创建
    (1)ngOnChanges()：当绑定到输入属性的值发生变化时该方法会被调用。即使当前组件没有任何属性绑定，该方法也会被调用一次。其接口为OnChanges
    (2)ngOnInit()：在Angular第一次显示数据绑定和设置输入属性之后调用，即组件初始化完毕。其接口为OnInit
    (3)ngDoCheck()：当组件检查到了系统对自己的影响时调用
    (4)ngAfterContentInit()：组件的内容初始化完成
        <yyw-component>这里就是组件内容</yyw-component>
    (5)ngAfterContentChecked()：组件的内容发生变化需要检查
    (6)ngAfterViewInit()：组件template初始化完成
    (7)ngAfterViewChecked()：组件template中发生变化需要检查
    (8)ngOnDestroy()：在组件即将从DOM树上销毁前调用

二.Angular组件间数据传递：Props Down，Events Up
1.父组件传递给子组件
    在子组件的ts文件中声明输入形属性并用@Input装饰
    在父组件的模版中子组件的标签内通过子组件的输入形属性传递值给子组件
2.子组件传递给父组件
    在子组件的ts文件中创建事件发射器EventEmitter并将其赋予一个自定义事件（属性），并在需要向父组件传递数据时调用事件发射器的emit()方法
    在父组件的ts文件中声明方法用来处理该自定义事件，并在父组件的模版中子组件的标签内使用该方法绑定该自定义事件
3.子组件传递给父组件的简化方式：让父组件直接获得子组件对象的引用（谨慎使用）
4.兄弟间不能直接进行数据传递：需要兄弟组件传递给父组件再传递给另一个兄弟组件
