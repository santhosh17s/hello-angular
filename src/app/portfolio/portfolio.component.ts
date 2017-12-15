import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  hello: string = "saying hi from child"; 

  @Input()
  count: number = 10;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
}
