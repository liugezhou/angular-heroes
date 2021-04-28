import { Injectable } from '@angular/core';
import { InMemoryDbService  } from "angular-in-memory-web-api";
import { Hero } from "./hero";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  constructor() { }
  createDb(){
    const heroes = [
      {id:1,name:'Vue'},
      {id:2,name:'React'},
      {id:3,name:'Angular'},
      {id:4,name:'JS'},
      {id:5,name:'TS'},
      {id:6,name:'HTML'},
      {id:7,name:'CSS'},
      {id:8,name:'Node'},
      {id:9,name:'Webpack'},
      {id:10,name:'Lerna'},
      {id:11,name:'MiniProgram'},
      {id:12,name:'Stylus'},
    ]
    return { heroes }
  }
  genId(heroes:Hero[]):number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero=>hero.id)) +1 : 1
  }
}
