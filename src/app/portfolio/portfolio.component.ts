import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
