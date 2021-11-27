import {GET_TODOS} from './types'
import {ADD_TODO} from './types'
import {DELETE_TODO} from './types'
import {EDIT_TODO} from './types'

export const Gettodos = (todos) => {
  return {type: GET_TODOS, todos: todos}
}

export const Deletetodo = (id) => {
  return {type: DELETE_TODO, payload: id}
}

export const Addtodo = (newtodo) => {
  return {type: ADD_TODO, payload: newtodo}
}

export const Edittodo = (editedtodo) => {
  return {type: EDIT_TODO, payload:editedtodo }
}
