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

#### 20210427
> 1. 创建service：ng generate service hero
> 新创建的hero.service.ts中：   
> + @Injectable()服务：将这个类标记为依赖注入系统的参与者之一。
> 2. Observable 可观察的数据    
> + HeroService.getHeros()将会返回Observable，部分原因在于他最终会使用Angular的HttpClient.get方法来获取英雄数据，而HttpClient.get()会返回Observable.    
> + Observable是RxJS库中的一个关键类。

#### 20210428
> 1. 添加AppRoutingModule(原cli新建已生成): ng generate module app-routing --flat --module=app  
> + --flat:把这个文件放进了src/app中，而不是单独的目录中。  
> + --module=app告诉cli把它注册到AppModule的imports数组中。 
> 2. 生成的app-routing-module.ts文件内容如目录所示。    
> + 这是一个Module，因此使用@angular/core中的ngModule。@ngModule 元数据会初始化路由器，并开始监听浏览器地址的变化。
> + 使用了@angular/router中的 RouterModule和Routes，使得该应用具有路由功能。    
> + <router-outlet></router-outlet> 
> + 标签跳转 <a routerLink="/heroes">Go</a>

##### 从服务端获取数据
> 借助Angular的HttpClient来添加一些数据持久化特性。HttpClient是Angular通过HTTP与远程服务器通讯的机制。   
>  要让HttpClient在应用中随处可用，需要两个步骤：导入语句添加到AppModule中，imports注入。   
##### 模拟数据服务器
> npm install angular-in-memory-web-api --save