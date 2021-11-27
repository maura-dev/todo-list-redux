import { combineReducers, createStore } from 'redux'
import todosReducer from './reducer'

const rootReducer = combineReducers({
  todos: todosReducer
})


const store = createStore(rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store