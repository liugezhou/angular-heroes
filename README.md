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