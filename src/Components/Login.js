import React, { useState } from "react";
import {
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import InputField from "./Input";
  import { useNavigate } from "react-router";
  
  export default function LogIn({ isOpen, onClose }) {
      let navigate = useNavigate();
      const [userDetails, setUserDetails] = useState(
          {
              username: "",
              password: "",
          }
      )
    
      const handleLogin = (e) => {
        localStorage.removeItem("userDetails");
        e.preventDefault();
        console.log(userDetails)
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        navigate('/todos')
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
                    Login
                  </Text>
  
                  <InputField
                    label="Enter your username"
                    name="username"
                    id="username"
                    type="text"
                    placeholder="John Doe"
                    mb={5}
                    onChange={ (e) => setUserDetails({...userDetails, username: e.target.value})}
                    value={userDetails.username}
                  />
  
                  <InputField
                    label="Enter your Password"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="false"
                    mb={5}
                    onChange={ (e) => setUserDetails({...userDetails, password: e.target.value})}
                    value={userDetails.password}
                  />
  
                  <Button
                    w="100%"
                    type="submit"
                    colorScheme="blue"
                    onClick={handleLogin}
                  >
                    {" "}
                    Log in
                  </Button>

                </>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  