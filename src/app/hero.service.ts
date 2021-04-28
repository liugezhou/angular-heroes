import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { MessageService } from './message.service';
import { Hero } from './hero'
import { HEROS } from './mock-heroes'
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {catchError,map,tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //访问地址 heroesURL 定义为 :base/:collectionName 的形式，的 base 是要请求的资源，而 collectionName 是 in-memory-data-service.ts 中的英雄数据对象。
  private heroesUrl = 'api/heroes'
  constructor( private http:HttpClient, public messageService:MessageService) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private log(message:string){
    this.messageService.add(`HeroService:${message}`)
  }
  getHero(id:number):Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url).pipe(
      tap(_=>this.log(`fetched hero id = ${id}`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    )
  }
  getHeros(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
              .pipe(
                tap(_ => this.log('fetched heroes')),
                catchError(this.handleError<Hero[]>('getHeroes',[]))
              )
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  // getHeros(): Observable<Hero[]>{
  //   this.messageService.add('HeroService:fetched heroes')
  //   return of(HEROS)
  // }
  // getHero(id:number):Observable<Hero>{
  //   this.messageService.add('HeroService:fetched hero id = '+id)
  //   return of(HEROS.find(hero=> hero.id === id))
  // }

 
}
