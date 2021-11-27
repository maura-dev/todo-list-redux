import { Box } from '@chakra-ui/layout';
import React from 'react';
import Header from '../Components/Header';
import Todos from '../Components/Todos';

export default function TodoList() {
    return (
        <Box w="100vw" overflowX="hidden" bg="#e5e5e5">
            <Header/>
            <Todos/>
        </Box>
    )
}
