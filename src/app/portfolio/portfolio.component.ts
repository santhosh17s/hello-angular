import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {  HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnChanges {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  
  @HostListener('click') newClicked() {
      console.log("host listener clicked");
  }

  constructor() { }

  ngOnChanges() {
    console.log("change in input properties");
  }

  ngOnInit() {
    console.log('Initialize the portfolio component');
    this.color = '#525252';
    this.borderColor = 'red';
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("portfolio component is destroyed");
  }

  @Output() hisay = new EventEmitter();

  @Input() 
  hello: string = "saying hi from child"; 

  @Input()
  count: number = 10;
  
  increment() {
    this.count++;
    this.hisay.emit("coming from child + ");
  }
  
  decrement() {
    this.count--;
     this.hisay.emit("coming from child - ");
  }
}
