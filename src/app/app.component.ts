import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';

export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []    
})
export class AppComponent implements OnInit{
  title = 'Testing App';

  counter: Observable<number>; 
  
  constructor(public http: HttpClient, private store: Store<AppState>){ 
    
  }

  ngOnInit() {
    //console.log('Initial Store counter value', this.store.select(state => state.counter));
    this.counter = this.store.select('counter');
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

}