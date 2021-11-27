/* eslint-disable import/no-anonymous-default-export */
import { GET_TODOS, DELETE_TODO, ADD_TODO, EDIT_TODO} from './types';
var allTodos;
if(localStorage.getItem("allTodos") === null){
     allTodos = []
} else{
     allTodos = JSON.parse(localStorage.getItem("allTodos"))
}
//const allTodos = JSON.parse(localStorage.getItem("allTodos"))
export default function (state=allTodos, action){
	switch (action.type){
    case GET_TODOS:
      return action.todos;

    case DELETE_TODO:
        localStorage.setItem("allTodos", JSON.stringify(state.filter(todo=>todo.id!==action.payload)));
      return state.filter(todo=>todo.id!==action.payload)

    case ADD_TODO:
        localStorage.setItem("allTodos", JSON.stringify([action.payload, ...state ]))
      return [action.payload, ...state ]

    case EDIT_TODO:
        localStorage.setItem("allTodos", JSON.stringify(state.map(todo=>
            todo.id===action.payload.id ? (todo=action.payload) : todo 
          )))
      return state.map(todo=>
        todo.id===action.payload.id ? (todo=action.payload) : todo 
      )
    
    default:
      return state;
  }
}