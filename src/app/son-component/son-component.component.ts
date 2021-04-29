import { Component, OnInit,Input,Output,SimpleChange,EventEmitter,OnDestroy } from '@angular/core';
import { Liugezhou } from "../viewdata/liugezhou";
@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.css']
})
export class SonComponentComponent implements OnInit {
  intervalId = 0;
  message = '';
  seconds = 10;
  @Input() title
  @Input()
  get hero(): Liugezhou { return this._hero; }
  set hero(hero: Liugezhou) {
    this._hero =hero;
  }
  private _hero:Liugezhou;
  str:string;
  str1:any;
  @Output() parentMethod = new EventEmitter()
  constructor() { }

  ngOnChanges(changes:SimpleChange){
    for(let propName in changes){
      const changedProp = changes[propName];
      if(propName === 'title'){
        this.str =JSON.stringify(changedProp.currentValue).toString()
      }
      if(propName === 'hero'){
        this.str1 =JSON.stringify(changedProp.currentValue)
      }
    }
    
  }
  ngOnInit(): void {
  }
  emitEvent(msg){
    this.parentMethod.emit(msg)
  }
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private clearTimer() { clearInterval(this.intervalId); }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
