## 起步
> 1.  ng new app-angular   
> 2. ng serve --open
> 3. 全局样式：src/style.css
> 4. 创建新组件：ng generate component heroes
> 5. @Component 是个装饰器函数，为该组件指定Angular所需的元数据:selector/templateUrl/styleUrls
> 6. ngOnInit()是一个生命周期钩子
> 7. 要显示新创建的heroes组件，必须在AppComponent模板中加入。<app-heroes></app-heroes>
> 8. Angular发布了一些内置管道。uppercase
> 9. 双向绑定：ngModel是一个有效的Angular指令，在默认情况下是不可用的，它属于可选模块FormsModule，必须自行添加此模块才能使用该指令，在app.module.ts中从@angular/forms库中导入FormsModule符号。并添加到@NgModule元数据的imports数组中。
> 10.  *ngFor是一个Augular的复写器(repeater)指令，它会为列表中的每项数据复写他的宿主元素。

## 20210427
> 1. 创建service：ng generate service hero
> 新创建的hero.service.ts中：   
> + @Injectable()服务：将这个类标记为依赖注入系统的参与者之一。
> 2. Observable 可观察的数据    
> + HeroService.getHeros()将会返回Observable，部分原因在于他最终会使用Angular的HttpClient.get方法来获取英雄数据，而HttpClient.get()会返回Observable.    
> + Observable是RxJS库中的一个关键类。

## 20210428
> 1. 添加AppRoutingModule(原cli新建已生成): ng generate module app-routing --flat --module=app  
> + --flat:把这个文件放进了src/app中，而不是单独的目录中。  
> + --module=app告诉cli把它注册到AppModule的imports数组中。 
> 2. 生成的app-routing-module.ts文件内容如目录所示。    
> + 这是一个Module，因此使用@angular/core中的ngModule。@ngModule 元数据会初始化路由器，并开始监听浏览器地址的变化。
> + 使用了@angular/router中的 RouterModule和Routes，使得该应用具有路由功能。    
> + <router-outlet></router-outlet> 
> + 标签跳转 <a routerLink="/heroes">Go</a>

### 从服务端获取数据
> 借助Angular的HttpClient来添加一些数据持久化特性。HttpClient是Angular通过HTTP与远程服务器通讯的机制。   
>  要让HttpClient在应用中随处可用，需要两个步骤：导入语句添加到AppModule中，imports注入。   
### 模拟数据服务器
> npm install angular-in-memory-web-api --save


## 组件与模版
> app/viewdata  
> [可以用构造函数来代替这些属性的声明和初始化语句。]    
> 这个示例：    
> + {{}}显示一个组件的属性 
> *ngFor显示数组 ｜
> 用一个TypeScript类为你的组件描述模型数据并显示模型的属性 ｜
> 用ngIf根据一个布尔表达式又条件的显示一段HTML。

## 模版语法
> 在Angular中，模版就是一块HTML

## 用户输入
> + 使用Angular事件绑定机制来响应任何DOM事件。
> + (click) | (keyup) | (keyup.enter) | (blur) 

## 生命周期钩子
> + ngOnChanges()   -- 使用变更检测钩子
> + ngOnInit()   --  初始化组件或指令
> + ngDoCheck()   -- 自定义变更检测
> + ngAfterContentInit()  -- 响应内容中的变更
> + ngAfterContentChecked()   -- 响应被投影内容的变更
> + ngAfterViewInit()   --  响应视图变更
> + ngAfterViewChecked()  
> + ngOnDestroy()
### 使用变更检测钩子--ngOnChanges()
> Angular生命周期钩子: ngOnChanges(changes:SimpleChange): 
> 在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。 
> 注意，如果你的组件没有输入，或者你使用它时没有提供任何输入，那么框架就不会调用 ngOnChanges()。 
> changes参数包含当前传入值、上次传入值以及是否为第一次传入。 

> 示例为：hero.component.html中引入app-hero-detail组件。
### 初始化组件或指令 -- ngOnInit()
> 在第一轮ngOnChanges()完成之后调用，只调用一次。
> ngOnInit()是组件获取初始数据的好地方。
### 自定义变更检测 -- ngDoCkeck()
> 要检查ngOnChanges()无法捕获的变更，你可以实现直接的变更逻辑，比如ngDoCheck()例子。
### 响应内容中的变更 -- ngAfterContentInit()
>  第一次调用ngDoCheck()之后调用，只调用一次。  
## 生命周期范例
> + Peek-a-boo  
> + Spy   
> + Onchanges
> + DoCheck
> + AfterView
> + AfterContent    
> + 计数器

## 组件交互
> 这里学习组件通讯场景：即让两个或多个组件之间共享信息的方法。  
> son-component
### 通过输入型绑定把数据从父组件传到子组件
> 通常带有@Input装饰器
### 通过setter截听输入属性值的变化
```
 export class NameChildComponent{
     @Input()
     get name() :string{return this._name}
     set name(name:string){
         this._name = (name && name.trim() || '<no name set>');
     }
     private _name='';
 }
```
### 通过ngOnChanges()来截听输入属性值的变化
> 在生命周期钩子中已经学习过

### 父组件监听子组件的事件 
> 子组件暴露一个EventEmitter属性，当事件发生时，子组件利用该属性emits(向上弹射)事件。   
> 子组件的EventEmitter属性是一个输出属性，通常带有@Output装饰器

### 父组件与子组件通过本地变量互动
> 父组件不能使用数据绑定来读取子组件的属性或调用子组件的方法。但可以在父组件模版里，新建一个本地变量来代表子组件，然后利用这个变量来读取子组件的属性和调用子组件的方法。    
> eg：父组件中有timer.start()和timer.stop()方法，然后在父组件中：<app-child-component #timer></app-child-component>,这个时候就可以调用子组件的start()和stop()方法了。

### 父组件调用@ViewChild()

### 父组件和子组件通过服务来通讯
> 父子组件共享一个服务，利用该服务在组件家族内部实现双向通讯。  
> 

## 组件样式
> 样式模块化：类名与选择器局限与该组件，不会与应用中其它地方冲突。  
> :host(伪类选择器) 
> :host-content 
> 有几种方式把样式加入组件中：设置styles和styleUrls元数据，内敛在模版的HTML中，通过CSS文件导入。    
> ng generate component hero-app --inline-style 

## 动态组件
> app/ad    
> app/ad-banner

## Angualr元素
> @angualr/element包导出了一个createCustomElement() API，它在Angular组件接口与变更检测功能和内置DOM API之间建立了一个桥梁。

## 属性型指令
> 用于改变一个元素的外观或行为。    
> 属性型指令至少需要一个带有@Directive装饰器的控制器类。    
> 编写指令代码：ng generate directive highlight  

## 结构型指令
> *ngIf / *ngFor / *ngSwitch    
> NgIf引用的是指令的类名，ngIf引用的是指令的属性名  
> 从内部实现来说，Angular把*ngIf属性翻译成一个<ng-template>元素，并用它来包裹宿主主元素。   
> ngSwitch实际上是一组相互合作的指令：NgSwitch、NgSwitchCase、NgSwitchDefault

## 管道
> DatePipe:根据本地环境中的规则格式化日期值。   
> UpperCasePipe:把文本全部转换为大写。  
> LowerCasePipe:把文本全部转换为小写。  
> CurrencyPipe:把数字转换成货币字符串，根据本地环境中的规则进行格式化。 
> DecimalPipe:把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。 
> PercentPipe:把数字转换成百分比字符串，根据本地环境中的规则进行格式化。 