import React from "react";
import {
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    useColorMode,
    FormErrorMessage,
    Link as ChakraLink,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdPerson
} from 'react-icons/md';
import {FaLinkedinIn, FaGithub, FaInstagram, FaStackOverflow} from 'react-icons/fa'
import {useForm} from "react-hook-form";
import Link from "next/link";

export default function Contact() {
    const {colorMode} = useColorMode();
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm({mode: 'onChange'});
    const onSubmit = (formData) => {
        fetch('/api/mail', {
            method: "POST",
            body: JSON.stringify(formData)
        });
        console.log(formData, 'values');
    }
    return (
        <Box
            minH='100vh'
            height='full'
            width={{base: '95%', md: '90%', lg: '80%', xl: '90%W'}}
            maxW='7xl'
            mx='auto'
            pt={{base: '28', sm: '14', md: '16', xl: '20'}}
            display='flex' alignItems='center' justifyContent='center'
        >
            <Flex align='center' justify='center'>
                <Box
                    bg="var(--chakra-colors-gray-900)"
                    color="white"
                    borderRadius="lg"
                    m={{sm: 4, md: 16, lg: 10}}
                    p={{sm: 5, md: 5, lg: 16}}>
                    <Box p={4}>
                        <Wrap spacing={{base: 20, sm: 3, md: 5, lg: 20}}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{sm: 3, md: 3, lg: 5}} color="white.500">
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{base: 5, sm: 5, md: 8, lg: 10}}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Link href='tel:+923364434480' passHref>
                                                <Button
                                                    as={ChakraLink}
                                                    size="md"
                                                    height="48px"
                                                    width="auto"
                                                    variant="ghost"
                                                    color="white"
                                                    _hover={{color: 'brand.600', textDecoration: 'none'}}
                                                    leftIcon={<MdPhone color="brand.300" size="20px"
                                                                       _hover={{color: 'brand.600'}}/>}>
                                                    +92 336 4434480
                                                </Button>
                                            </Link>
                                            <Link href='mailto: humayonhere@gmail.com' passHref>
                                                <Button
                                                    as={ChakraLink}
                                                    size="md"
                                                    height="48px"
                                                    width="auto"
                                                    variant="ghost"
                                                    color="white"
                                                    _hover={{color: 'brand.600', textDecoration: 'none'}}
                                                    leftIcon={<MdEmail color="brand.300" size="20px"
                                                                       _hover={{color: 'brand.600'}}/>}>
                                                    humayonhere@gmail.com
                                                </Button>
                                            </Link>
                                            <Link
                                                href='https://www.google.com/maps/place/Lahore,+Punjab,+Pakistan/@31.4828641,74.194306,11z/data=!3m1!4b1!4m5!3m4!1s0x39190483e58107d9:0xc23abe6ccc7e2462!8m2!3d31.5203696!4d74.3587473'
                                                passHref isExternal>
                                                <Button
                                                    as={ChakraLink}
                                                    isExternal
                                                    size="md"
                                                    height="48px"
                                                    width="auto"
                                                    variant="ghost"
                                                    color="white"
                                                    _hover={{color: 'brand.600', textDecoration: 'none'}}
                                                    leftIcon={<MdLocationOn color="brand.300" size="20px"
                                                                            _hover={{color: 'brand.600'}}/>}>
                                                    Lahore, Pakistan
                                                </Button>
                                            </Link>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{lg: 5, md: 5}}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{bg: 'brand.600'}}
                                            icon={<FaGithub size="24px"/>}
                                        />
                                        <IconButton
                                            aria-label="linkedin"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{bg: 'brand.600'}}
                                            icon={<FaLinkedinIn size="24px"/>}
                                        />
                                        <IconButton
                                            aria-label="stackoverflow"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{bg: 'brand.600'}}
                                            icon={<FaStackOverflow size="24px"/>}
                                        />
                                        <IconButton
                                            aria-label="instagram"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{bg: 'brand.600'}}
                                            icon={<FaInstagram size="24px"/>}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <FormControl id="name" isInvalid={errors.name}>
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                        >
                                                            <MdPerson color="gray.800"/>
                                                        </InputLeftElement>
                                                        <Input type="text" size="md"
                                                               name="name"
                                                               placeholder="Humayon Zafar"
                                                               {...register('name', {required: "Name is required"})}
                                                        />
                                                    </InputGroup>
                                                    <FormErrorMessage>
                                                        {errors.name && errors.name.message}
                                                    </FormErrorMessage>
                                                </FormControl>
                                                <FormControl id="email" isInvalid={errors.email}>
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                        >
                                                        <MdEmail color="gray.800"/>
                                                        </InputLeftElement>
                                                        <Input type="email" size="md" name="email"
                                                               placeholder="humayonhere@gmail.com"
                                                               {...register('email', {
                                                                   required: "Email is required",
                                                                   pattern:
                                                                       {
                                                                           value: /\S+@\S+\.\S+/,
                                                                           message: 'Please enter a valid email address'
                                                                       }
                                                               })}/>
                                                    </InputGroup>
                                                    <FormErrorMessage>
                                                        {errors.email && errors.email.message}
                                                    </FormErrorMessage>
                                                </FormControl>
                                                <FormControl id="contact_message" isInvalid={errors.contact_message}>
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        name="contact_message"
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                        {...register('contact_message', {
                                                            required: 'Message is required',
                                                            minLength: {
                                                                value: 15,
                                                                message: 'Message should be at-least 15 characters long'
                                                            },
                                                            maxLength: {
                                                                value: 300,
                                                                message: 'Message should be less than 800 characters'
                                                            },
                                                        })}
                                                    />
                                                    <FormErrorMessage>
                                                        {errors.contact_message && errors.contact_message.message}
                                                    </FormErrorMessage>
                                                </FormControl>
                                                <FormControl id="submit-button" textAlign={{base: 'center', md: 'right', lg: 'right', xl: 'right'}}>
                                                    <Button
                                                        colorScheme='brand'
                                                        mt='1rem'
                                                        _hover={{color: 'white', bg:'brand.600'}}
                                                        type='submit'
                                                        isLoading={isSubmitting}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </form>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}