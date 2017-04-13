import * as types from './actionTypes.js';

export function addTodo(text) {
  return {
    type: types.ADDTODO,
    text: text
  };
}

export function deleteTodo(id) {
    return{
        type: types.DELETETODO,
        id: id
    };
}
