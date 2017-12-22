import { State } from "@ngrx/store";

interface Action {
    type: string;
    payload?: any;
  }

  const action: Action = {
    type: 'ADD_TODO',
    payload: { label: 'Eat pizza,', complete: false },
  };

  export function todoReducer(state = {}, action: Action){
      switch(action.type){
        case 'ADD_TODO': {
            const todo = action.payload;
            //const todos = [...state.todos, { label: 'Eat pizza,', complete: false }];
            return {  };
        }
      }
    return state;  
  }