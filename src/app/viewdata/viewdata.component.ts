import { Component, OnInit } from '@angular/core';
import { Liugezhou } from "./liugezhou";
@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  title:string ='Angular';
  heroes:Liugezhou [] = [
    new Liugezhou(1,'Liugezhou'),
    new Liugezhou(2,'Liumingzhou'),
    new Liugezhou(3,'Liu'),
    new Liugezhou(4,'Ming'),
    new Liugezhou(5,'Zhou'),
  ];
  myHero:Liugezhou = this.heroes[0];
  constructor(){
  }
  ngOnChanges(){
    console.log('ngOnChanges()')
  }
  ngOnInit(){
    console.log('ngOnInit()')
  }
  ngOnDoCheck(){
    console.log('ngOnDoCheck()')
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
    console.log('ngAfterViewChecked()')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy()')
  }
}
