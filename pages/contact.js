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
    FormErrorMessage,
    Link as ChakraLink,
    useColorModeValue
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdPerson
} from 'react-icons/md';
import {FaLinkedinIn, FaGithub, FaInstagram, FaStackOverflow} from 'react-icons/fa'
import Link from "next/link";
import {useContactForm} from "@/hooks/useContactForm";
import Response from "@/components/Contact/Response";
import {NextSeo} from "next-seo";
import {social} from "@/data/social";
import LineHeading from "@/components/LineHeading";

export default function Contact() {
    const {register, handleSubmit, errors, isSubmitting, showResponse, onSubmit} = useContactForm();
    return (
        <>
            <NextSeo title='Contact'/>
            <Box
                width='full' px={3} minH='100vh' height='full' mx='auto' maxW='7xl' py='28'
            >
                <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
                    <LineHeading fontSize={{ base: `5xl`, md: `6xl` }} mx='auto' textAlign='center'>
                        Contact
                    </LineHeading>
                    <Text mt={3}>Feel free to contact me for any queries.</Text>
                    <Flex align='center' justify='center' mt={{base:'2rem', md: '1rem'}}>
                        <Box
                            bg={useColorModeValue('gray.900', 'gray.700')}
                            color="white"
                            borderRadius="lg"
                            m={{sm: 4, md: 5, lg: 10}}
                            p={{sm: 5, md: 5, lg: 16}}>
                            <Box p={4}>
                                <Wrap spacing={{base: 5, sm: 10, md: 20}}>
                                    <WrapItem>
                                        <Box>
                                            <Heading>Form Details</Heading>
                                            <Text mt={{sm: 1, md: 1, lg: 3}} color="white.500">
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
                                                spacing={5}
                                                px={3}
                                                alignItems="flex-start">
                                                <IconButton
                                                    as={'a'}
                                                    href={social.github}
                                                    target={'_blank'}
                                                    aria-label="github"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{bg: 'brand.600'}}
                                                    icon={<FaGithub size="24px"/>}
                                                />
                                                <IconButton
                                                    aria-label="stackoverflow"
                                                    as={'a'}
                                                    href={social.stackoverflow}
                                                    target={'_blank'}
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{bg: 'brand.600'}}
                                                    icon={<FaStackOverflow size="24px"/>}
                                                />
                                                <IconButton
                                                    aria-label="linkedin"
                                                    as={'a'}
                                                    href={social.linkedin}
                                                    target={'_blank'}
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{bg: 'brand.600'}}
                                                    icon={<FaLinkedinIn size="24px"/>}
                                                />
                                                <IconButton
                                                    aria-label="instagram"
                                                    as={'a'}
                                                    href={social.instagram}
                                                    target={'_blank'}
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
                                        <Box bg={showResponse!=null ? useColorModeValue('gray.900', 'gray.700') : "white"} borderRadius="lg" mt={2}>
                                            <Box m={7} color="#0B0E3F">
                                                <VStack spacing={5}>
                                                    {showResponse==null ?
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
                                                            <FormControl id="email" isInvalid={errors.email} mt={2}>
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
                                                            <FormControl id="contact_message"
                                                                         isInvalid={errors.contact_message} mt={2}>
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
                                                                            value: 10,
                                                                            message: 'Message should be at-least 10 characters long'
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
                                                            <FormControl id="submit-button" textAlign={{
                                                                base: 'center',
                                                                md: 'right',
                                                                lg: 'right',
                                                                xl: 'right'
                                                            }}>
                                                                <Button
                                                                    bg='brand.600'
                                                                    color='white'
                                                                    mt='1rem'
                                                                    _hover={{color: 'white', bg: 'brand.800'}}
                                                                    type='submit'
                                                                    isLoading={isSubmitting}
                                                                >
                                                                    Send Message
                                                                </Button>
                                                            </FormControl>
                                                        </form>
                                                        : <Response showResponse={showResponse}/>}
                                                </VStack>
                                            </Box>
                                        </Box>
                                    </WrapItem>
                                </Wrap>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

        </>
    );
}