一.路由嵌套
    一级路由：
        index：首页
        user/center：用户中心
            二级路由：
                user/center/info：用户中心>我的信息
                user/center/avatar：用户中心>更改头像
                user/center/security：用户中心>安全管理
    
    1.在路由词典中使用children来进行路由嵌套。在路由词典中二级路由的地址声明不需要以一级路由的地址开头，但是在页面上访问时必须携带一级路由地址为前缀
    2.子路由的挂载点<router-outlet></router-outlet>应该放在其对应一级路由的template中

二.路由守卫
    有些路由地址只能在特定条件下才能访问，比如登录后才能访问。
    angular中提供了router guards来实现用户访问组件前的检查功能。如果检查通过则return true来放行；否则return false进行拦截。
    路由守卫有各种接口可以使用：
        CanActivate：canActivate()
        CanActivateChild
        ...
    当用户尝试导航到某个路由时，Angular 路由器会检查该路由是否有 canActivate 路由守卫。如果有，它会调用守卫中的 canActivate 方法。如果返回 true，则允许导航继续进行。如果返回 false，则阻止导航，并且用户将不能访问该路由。

    1.创建登录路由守卫方法（最新版ng）：ng g guard login；或者创建路由守卫类
    2.如果是以类的方式创建的路由守卫，则本质上是一种服务。所以需要使用@Injectable装饰器用来进行依赖注入
    3.在路由词典中，对需要用到路由守卫的路由类添加路由守卫
    4.如果路由守卫中验证不通过，可以引入Router用来进行脚本方式的页面跳转，这样可以避免由于路由组件不通过导致路由组件部分不显示引起的页面空白问题

    