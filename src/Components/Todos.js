import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
//import {Gettodos} from '../redux/actions';
import TodoItem from './todoItem';
import { useDispatch } from 'react-redux';
import { Addtodo } from '../redux/actions';
import { useToast } from '@chakra-ui/toast';

export default function Todos() {
	const dispatch = useDispatch();
	const toast = useToast();

	const todos = useSelector((state) => state.todos)
	const [newTodo, setnewTodo] = useState({
		id: Math.floor(Math.random()* Date.now()),
		status: false,
        task: ""
	})

	const handleAddTodo = ()=> {
		if(newTodo.task === ""||newTodo.task === " "){
			return;
		} else {
			dispatch(Addtodo(newTodo))
			//localStorage.setItem("allTodos")
			setnewTodo({
				id: Math.floor(Math.random()* Date.now()),
				status: false,
				task: ""
			})
			toast({
				title:"Sucessfully added to your tasks",
				status:"success",
				isClosable:true
			})
		}
	}

	return (
		<Box
			w={{base:"100%", md:"60%", lg:"40%"}}
			mx="auto"
			py={10}
			bg="#ffffff"
			p={{base:"0.5rem", md:"1.25rem"}}
			boxShadow="md"
			minH= "90vh"
			overflowY="scroll"
		>
			<Box
				d="flex"
				justifyContent="space-between"
				alignItems="baseline"
			>
				<Textarea
					value={newTodo.task}
					onChange={ (e) => setnewTodo({...newTodo, task: e.target.value})}
					placeholder="Type in a task ..."
					size="sm"
					resize="none"
					w="70%"
					minH="40px"
					required
				/>
				<Button 
					maxH="48px" 
					colorScheme="blue" 
					mt={2} 
					onClick={handleAddTodo}
					lineHeight={0}
				>Add task</Button>
			</Box>
			{todos.map((todo,index) =>(
					<TodoItem 
						key={index} 
						todo={todo}
					/>
			))}
			
		</Box>
	)
}

// const mapStateToProps = (state) => {
// 	return{
// 	  todos: state.todos
// 	}
//   }
  
// export default connect(mapStateToProps, null)(Todos)