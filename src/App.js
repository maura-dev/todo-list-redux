// import React, { Component } from 'react'
// import Todos from './Components/Todos'
// import AddTodo from './Components/addTodo'
// import Header from './Components/Header'
// import './App.css'

// class App extends Component{

//   state={
//     todos:[
//     {
//       id:1,
//       title:"Braid my hair",
//       completed:false
//     },
//     {
//       id:2,
//       title:"Wash my clothes",
//       completed:false
//     },
//     {
//       id:3,
//       title:"Say a prayer",
//       completed:false
//     }
//     ]

//   }

//   markComplete=(id)=>{
//     console.log(id)
//     this.setState({
//       todos: this.state.todos.map(todo=>{
//         if(todo.id===id){
//           todo.completed=!todo.completed
//         }
//         return todo
        
//       })
//     });
//   }

//   deleteTodo=(id)=>{
//     this.setState({
//       todos:[...this.state.todos.filter(todo=>todo.id!==id)]
//       })
//   }

//   addTodo=(title)=>{
//     const newTodo={
//       id:new Date(),
//       title:title,
//       completed: false
//     }

//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     });
//   }


//   render() {

//     return( 
//       <div className="App" style={{
//         width:'70%', 
//         margin:'auto', 
//         border:'2px solid mistyrose', 
//         boxShadow:'4px 4px 4px 4px gray',
//         borderRadius:'10px',
//         padding:'10px 10px 50px 10px'
//         }}>
//         <Header/>
//         <AddTodo addTodo={this.addTodo}/> 
//         <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
//       </div>
//     )         
//   }

// }


// export default App;

import React from 'react';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todos" element={<TodoList/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

