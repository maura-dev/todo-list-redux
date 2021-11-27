import { Checkbox } from '@chakra-ui/checkbox'
import { useDisclosure } from '@chakra-ui/hooks';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Deletetodo, Edittodo } from '../redux/actions';
import EditModal from './EditModal';
//import { useSelector } from 'react-redux';

export default function TodoItem({todo}) {

	const dispatch = useDispatch();
	const toast = useToast();
	const {
        isOpen: isOpenEditModal,
        onOpen: onOpenEditModal,
        onClose: onCloseEditModal,
      } = useDisclosure();

	const handleDeleteTodo = () => {
		dispatch(Deletetodo(todo.id))
		toast({
			title:"Sucessfully deleted your task",
			status:"success",
			isClosable:true
		})
	}

	const handleStatusChange = ()=> {
		dispatch(Edittodo({
			id: todo.id,
			status: !todo.completed,
			task: todo.task,
		}))
	}

	return (
		<Box
			d="flex"
			justify="space around"
			py={5}
			px ={{base:"1rem", md:"1.25rem"}}
			minH="48px"
			id={todo.id}
			position="relative"
			w="100%"
			borderBottom="1px solid #efefef"
			fontSize={{base:"14px", md:"16px"}}
		>
			<Checkbox 
				colorScheme="blue" 
				isChecked={todo.completed} 
				mr={3} 
				mt={1} 
				onChange={handleStatusChange}/>
			<Text>{todo.task}</Text>
			<Box position="absolute" right="20px">
				<DeleteIcon color="red" mr={5} cursor="pointer" onClick={handleDeleteTodo}/>
				<EditIcon color = "green" cursor="pointer" onClick={onOpenEditModal}/>
			</Box>
			<EditModal todo={todo} isOpen={isOpenEditModal} onClose={onCloseEditModal}/>
		</Box>
	)
}
