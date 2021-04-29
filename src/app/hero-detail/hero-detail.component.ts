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
  oldHeroName:string
  changeDetected:boolean
  noChangeCount:number
  constructor(
    private heroService:HeroService,
    private location:Location,
    private route:ActivatedRoute,
    ) { }
    ngOnChanges(changes:SimpleChange){
    console.log('ngOnchanges()')
    return
    for (const propName in changes) {
      console.log('propName:',propName)
      const chng = changes[propName];
      console.log('chng',chng)
      const cur  = JSON.stringify(chng.currentValue);
      console.log('cur',cur)
      const prev = JSON.stringify(chng.previousValue);
      console.log('prew',prev)
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit()')
    // this.getHero()  //这个放开的条件是 a标签中的routerLink注注释放开
  }
  ngDoCheck(){
    console.log('ngDoCheck()')
    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.oldHeroName = this.hero.name;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
        // log that hook was called when there was no relevant change.
        const count = this.noChangeCount += 1;
        if (count === 1) {
          // add new "no change" message
        } else {
          // update last "no change" message
        }
    }

    this.changeDetected = false;
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit()')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked()')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit()')
  }
  ngAfterViewChecked(){
    console.log('ngViewAfterChecked()')
  }
  ngOnDestory(){
    console.log('ngOnDestory()')
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
