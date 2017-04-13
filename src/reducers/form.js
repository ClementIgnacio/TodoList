import * as types from '../actions/actionTypes';

const initialState = {
  todos: []
};

export default function form(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADDTODO:
    var theId = state.todos.length == 0 ? 1 : state.todos[state.todos.length-1].id+1;
      return {
        todos: [
        ...state.todos,
          {
            text: action.text,
            id: theId
          }
        ]
      };
    case types.DELETETODO:
    for(var i=0; i < state.todos.length; i++){
        console.log("if ("+state.todos[i].id+" === "+action.id+")")
        if(state.todos[i].id === action.id)
            state.todos.splice(i, 1);
    }
    return {todos: [ ...state.todos]};
    default:
      return state;
  }
}