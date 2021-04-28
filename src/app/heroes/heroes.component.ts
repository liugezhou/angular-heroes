import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService, private messageService: MessageService) { }
  heroes :Hero[] ;
  selectedHero:Hero;

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes():void{
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes)
  }
  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

}
