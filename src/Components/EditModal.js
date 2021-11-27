import React, { useState } from "react";
import {
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useToast,
    Textarea,
  } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Edittodo } from "../redux/actions";
  
  export default function EditModal({ isOpen, onClose,todo }) {
    
    const dispatch = useDispatch();
    const toast = useToast();
      const [editedTodo, setEditedTodo] = useState(
          {
            id: todo.id,
            status: todo.completed,
            task: todo.task
          }
      )

      const handleEditTodo = () => {
            onClose()
            dispatch(Edittodo(editedTodo))
            toast({
                title:"Sucessfully edited your task",
                status:"success",
                isClosable:true
            })
      }
    
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={8}>
                <>
                  <Text
                    m={5}
                    textAlign="center"
                    fontWeight="medium"
                    fontSize="x-large"
                  >
                    Edit your task
                  </Text>

                  <Textarea
					mb={5}
                    onChange={ (e) => setEditedTodo({...editedTodo, task: e.target.value})}
                    value={editedTodo.task}
					placeholder="Type in a task ..."
					size="sm"
					resize="none"
					required
				/>
    
                  <Button
                    w="100%"
                    type="submit"
                    colorScheme="blue"
                    onClick={handleEditTodo}
                  >
                    {" "}
                    Add changes
                  </Button>

                </>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  