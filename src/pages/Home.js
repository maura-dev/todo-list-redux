import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
import Illustration from "../Components/bg.svg";
import LogIn from '../Components/Login';
  
  export default function Home() {
    const {
        isOpen: isOpenLogInModal,
        onOpen: onOpenLogInModal,
        onClose: onCloseLogInModal,
      } = useDisclosure();
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            lineHeight={'110%'}>
            Being organized has{' '}
            <Text as={'span'} color={'blue.400'}>
              now been made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Keep track of your tasks and to-dos and never lose sight of what needs to be done. Create your to-do list and keep updating as you go.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={onOpenLogInModal}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'} justify="center">
            <Image
                src={Illustration}
                boxSize="350px"
            />
          </Flex>
        </Stack>
        <LogIn isOpen={isOpenLogInModal} onClose={onCloseLogInModal}/>
      </Container>
    );
  }
  
  