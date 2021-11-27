import { CalendarIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Text
} from '@chakra-ui/react';

export default function Header() {
  
  const user = JSON.parse(localStorage.getItem("userDetails"))
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} maxW="100vw">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color="blue" fontWeight="700"><CalendarIcon mr={2}/>Todo.io</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              <Text mt={3} fontWeight="700" fontSize="lg">Welcome, {user.username} &nbsp;</Text>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
				  <Avatar>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                  </Center>
                  <br />
                  <Center>
                    <p>Username : {user.username}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
  }