一.组件的嵌套
1.在某个组件的template中引入另一个组件（在ng中组件模版中不需要根标签即标签可以有任意多个，而在react中组件模版的根标签只能有一个）
2.在根组件app-root的模版即app.component.html中引入另外一个组件

二.但如果需要自己手动创建组件的ts,html和css会过于繁琐
1.在项目的根目录下使用命令创建自定义组件：ng generate component 组件名。该命令在创建组件的相关文件后也会自动在app.module.ts中注册该组件

三.数据绑定
1.Interpolation binding：{{NG 表达式}}
    在NG表达式中可以执行的代码有：
        算术运算
        比较运算
        逻辑运算
        三目运算
        调用函数
        不允许创建对象
        不允许JSON序列化
2.Property binding
    (1)直接在属性中用{{}}做属性绑定
    (2)用中括号包裹属性：[属性]做属性绑定。当绑定的数据有常量时必须用单引号括起来
3.Event binding
    用小括号 () 将事件名包围起来，并将其赋值给一个表达式或一个方法。当该事件发生时，Angular 将执行这个表达式或方法
4.Directive binding
    (1)预定义指令
        所有的预定义指令都是作为标签的属性来使用，angular中的指令分为3类：
            a.Component：Component其实继承自Directive，所以组件本质上是一种带template的指令
            b.Structural directives：以*开头，该指令会影响DOM树的结构
                循环绑定：*ngFor
                选择绑定：*ngIf
                        *ngSwitchCase
                        
            c.Attribute directives：用[]括起来，该指令不会影响DOM树的结构，只会影响元素的外观或行为
                样式绑定:[ngStyle],ngStyle绑定的值必须是一个对象，对象属性就是CSS的样式名。但是由于将样式放在了ts文件中的代码内所以不推荐
                        [ngClass],ngClass绑定的值也必须是一个对象，对象属性就是CSS的class名，属性值为true/false（true代表使用该class，false则不使用）
                        [ngSwitch]

                Two-way Binding：[(ngModel)]
                (1)它允许将 HTML 表单元素（如输入框、选择框、单选按钮等）的值绑定到组件类的属性上。这意味着当表单元素的值改变时，绑定的组件属性也会随之更新，反之亦然
                (2)以上的这些ngIf,ngFor等...都属于commonModule这个模块，而该模块在BrowserModule模块中被导入了，由于在AppModule中引入了BrowserModule所以不需要再手动导入
                (3)
                commonModule一开始就被自动导入了。而ngModel属于formsModule这个模块，所以需要手动导入！
                方向一：Model=>View，模型变则视图变（以上都是这种）。即[]：将组件的属性值绑定到HTML元素的属性上。
                方向二：View=>Model，视图（表单元素）变则模型变。即()：将HTML元素的属性的变化绑定到组件的属性值上
                (4)
                (ngModelChange) 表示单向事件绑定：任何视图（如输入框）中的绑定的数据的变化都会更新模型的值，并触发 ngModelChange 事件（注意只有绑定的数据变化时才会触发）

    (2)自定义指令
        a.创建指令命令：ng generate directive 指令名。该命令会创建该指令的ts文件，并且用@Directive修饰指令，由于指令都是作为标签的属性，所以其  selector为[指令名]。而指令没有template
        b.该命令在创建该指令的ts文件后也会自动在app.module.ts中注册该指令