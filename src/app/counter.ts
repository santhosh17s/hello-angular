import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action){
    switch(action.type){
        case INCREMENT: 
                //console.log(state);
                return state + 1;
        case DECREMENT:
                 //console.log(state);
                return state - 1;
        case RESET:
                return 0;
        default:
            return state;                        
    }
}

