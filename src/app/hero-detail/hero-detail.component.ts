import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero
  @Input() test:Hero
  constructor(
    private heroService:HeroService,
    private location:Location,
    private route:ActivatedRoute,
    ) { }
  ngOnChanges(changes:SimpleChange){
    for (const propName in changes) {
      console.log('propName:',propName)
      const chng = changes[propName];
      console.log('chng',chng)
      const cur  = JSON.stringify(chng.currentValue);
      console.log('cur',cur)
      const prev = JSON.stringify(chng.previousValue);
      console.log('prew',prev)
    }
    console.log('ngOnchanges()')
  }
  ngOnInit(): void {
    console.log('ngOnInit()')
    // this.getHero()  //这个放开的条件是 a标签中的routerLink注注释放开
  }
  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(id)
      .subscribe(hero=> this.hero = hero)
  }
  goBack():void{
    this.location.back()
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
