import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent} from './heroes/heroes.component'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { ViewdataComponent } from "./viewdata/viewdata.component";
import { AdComponent } from "./ad/ad.component";
import { RouteComponent } from "./route/route.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'viewdata',component:ViewdataComponent},
  {path:'ad',component:AdComponent},
  {path:'route',component:RouteComponent},
];

@NgModule({  //@NgModule 元数据会初始化路由器，并开始监听浏览器地址的变化
  //这个方法之所以叫 forRoot()，是因为你要在应用的顶层配置这个路由器。 forRoot() 方法会提供路由所需的服务提供者和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)],
  //导出 RouterModule，以便它在整个应用程序中生效
  exports: [RouterModule]
})
export class AppRoutingModule { }
