import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { MessageService } from './message.service';
import { Hero } from './hero'
import { HEROS } from './mock-heroes'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(public messageService:MessageService) { }
  getHeros(): Observable<Hero[]>{
    this.messageService.add('HeroService:fetched heroes')
    return of(HEROS)
  }
  getHero(id:number):Observable<Hero>{
    this.messageService.add('HeroService:fetched hero id = '+id)
    return of(HEROS.find(hero=> hero.id === id))
  }
}
