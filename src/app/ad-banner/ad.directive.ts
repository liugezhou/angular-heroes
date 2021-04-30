import { Directive,ViewContainerRef  } from "@angular/core";
// 注入ViewContainerRef来获取对容器视图的访问权：容器指的是那些动态加入的组件的宿主。
@Directive({
    selector: '[adHost]',
})

export class AdDirective {
    constructor(public viewContainerRef:ViewContainerRef) {
    }
}
