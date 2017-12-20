import { Component, OnInit, Input, Output, ViewChild, AfterViewInit} from '@angular/core';

import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';

import { AboutComponent } from './about/about.component';

export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []    
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Testing App';

  initialCount: number = 17;
  helloValue: string = "Say Hello from parent to child!";

  @ViewChild(AboutComponent) about: AboutComponent;


  //@Input() nameFromInput:string = "It is from input value";
  //@Input() angImg: string = "https://angularjs.org/img/AngularJS-large.png";
  //@Output() nameOut: string = "It is output string";

  //store value
  counter: Observable<number>; 
  
  constructor(public http: HttpClient, private store: Store<AppState>){ 
    
  }

  ngOnInit() {
    //console.log('Initial Store counter value', this.store.select(state => state.counter));
    this.counter = this.store.select('counter');
  }

  ngAfterViewInit() {
   //  console.log(this.about.whoAmI());
  }

  increment() {
    this.store.dispatch({type: INCREMENT });
   // console.log("increment", this.counter);
  }

  decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}

  sayHi(event){
    console.log(event);
  }

}
