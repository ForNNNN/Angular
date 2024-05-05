一.自定义Pipe(管道，本质是过滤器)
    1.Pipe用于在View中呈现数据时显示未另一种格式。过滤器的本质是一个函数，将接收的原始数据转换成更新后的数据进行输出：
        transform(val){ <!--该函数必须为transform()，因为Pipe类实际实现了PipeTransform接口-->
            ...
            return new val;
        }
    2.使用过滤器：
        html绑定：{{原始数据 | 管道名}}
        属性绑定：<p [title]='原始数据|管道名'></p>
        
    3.创建Pipe：
        (1)创建Pipe的class，并实现对原始数据转换的函数
        (2)在Module中导入Pipe（导入的是Pipe的类名，而不是Pipe名）
        (3)在template中使用Pipe
    
    4.使用命令创建Pipe：ng generate pipe 管道名（除了component会创建文件夹）

二.预定义Pipe
    1.UpperCasePipe: 将文本转换为大写
        {{ message | uppercase }}
    2.LowerCasePipe: 将文本转换为小写
        {{ message | lowercase }}
    3.TitleCasePipe: 将首字母转换成大写
        {{ message | titlecase }}
    4.SliceCasePiple: 将字符串进行截取
        {{message | slice:start:end}}
    5.JsonPipe: 将一个 JavaScript 对象或数组转换成 JSON 字符串
        {{message | json}}
    6.DecimalPipe: 将数字转换成字符串
        {{message | number[:digitsInfo]}}

三.服务和依赖注入（类似Spring）
    在angular中，component是用来和用户进行交互的一种对象，所以当某些数据需要展现给用户时才需要将其创建成组件
    而有些数据是不能展现给用户的比如日志，此时就需要组件外创建服务对象，将日志这些放在服务对象中
    1.自定义服务并创建对象
        创建对象的两种方式：
            1.手动创建普通对象：let c = new Car()
            2.依赖注入创建服务对象：无需手动创建，只需要声明依赖；而服务提供者就会创建被依赖的对象，对该对象进行注入
                (1)服务还是需要用类来创建，服务必须被@Injectable装饰器修饰并且指明服务提供者
                    a.服务提供者为根模块AppModule：
                        使用providedIn: 'root'作为@Injectable装饰器的参数时，服务会在应用的根级别可用。这意味着应用中的所有部分都将共享一个单一实例的服务，而不管服务是在哪个模块、组件或服务中注入的。
                    b.服务提供者为模块：
                        当服务在某个模块的providers中注册时，Angular为该模块的每个新的注入器创建服务的一个新实例。这意味着所有在此模块中声明的组件、指令等都会共享这个模块级别的同一个服务实例。
                        但是，如果其他模块也独立注册了同一服务，那么每个模块会拥有该服务的独立实例。
                    b.服务提供者为组件：
                        在组件的providers数组中注册服务。这样，每个组件及其子组件会得到该服务的独立实例，而不会与其他组件共享。
                        一旦服务对象中有属性，服务提供者就只能是组件，否则推荐使用根模块作为服务提供者
                    
                    如果既在根模块中注册了服务；也在模块或组件中注册了服务
                    那么这个模块及其子组件将会使用一个该模块范围内的新实例，而不是使用根注入器中的单例服务。这意味着在这个模块的上下文中，服务的实例是独立于应用其他部分使用的根级服务实例的。

                (2)在需要该服务的组件中，需要在constructor()中就声明依赖的服务。服务提供者就会自动将服务对象注入进来，从而组件可以直接使用服务对象
    
    2.Angular官方提供的服务对象：比如HttpClient
        HttpClient服务对象用于向指定的Url发送异步请求（发送异步请求的方法还有使用原生XHR对象，基于回调方式；Axios对象，基于Promise）
        HttpClient也是XHR并进一步的进行了封装，但是基于观察者模式
        (1)在主模块AppModule中import HttpClientModule
        (2)在要用的组件中声明依赖HttpClient服务对象