import {
    Box,
    Flex,
    Heading,
    Image,
    chakra,
    useColorModeValue,
    Skeleton,
    Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, {useState, useRef, useEffect} from 'react';
import {NextSeo} from 'next-seo';
import AboutTerminal from "../src/components/AboutTerminal";
import {InView} from "react-intersection-observer";

export default function Home() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showTerminal, setShowTerminal] = useState(false);
    const imageRef = useRef(null);
    useEffect(() => {
        if (!imageLoaded && imageRef.current?.complete) {
            setImageLoaded(true);
        }
    }, []);
    return (
        <>
            <NextSeo title='Home'/>
            <Box
                minH='100vh'
                height='full'
                width={{base: '95%', md: '90%', lg: '80%', xl: '90%W'}}
                maxW='7xl'
                mx='auto'
                pt={{base: '28', sm: '14', md: '16', xl: '20'}}
            >
                <Flex
                    direction='column'
                    justifyContent={{base: 'center', md: 'flex-start'}}
                    height='full'
                    width='full'
                    p={{base: 0, sm: 16}}
                >
                    <Flex
                        direction={{base: `column`, lg: `row`}}
                        alignItems='center'
                        mx='auto'
                        my={{xl: '16'}}
                    >
                        <Skeleton isLoaded={imageLoaded} boxSize='250px' borderRadius='2xl' m='auto'>
                            <Image
                                ref={imageRef}
                                flexGrow={3}
                                borderRadius='2xl'
                                boxSize='250px'
                                src='https://res.cloudinary.com/humayoncloud/image/upload/v1640542101/Portfolio/profile-pic_dovm5o.png'
                                objectFit='cover'
                                alt='Humayon Zafar'
                                onLoad={() => setImageLoaded(true)}
                            />
                        </Skeleton>
                        <Flex
                            alignSelf='center'
                            direction='column'
                            pl={{base: 0, lg: 10}}
                            my={{base: 10, lg: 0}}
                            flexGrow={1}
                        >
                            <Heading
                                bgGradient={`linear(to-r, ${useColorModeValue(
                                    `brand.600`,
                                    `brand.400`
                                )}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(
                                    `blue.600`,
                                    `blue.300`
                                )})`}
                                className='moving-grad'
                                bgClip='text'
                                fontSize={{base: `5xl`, lg: `7xl`}}
                                textAlign={{base: `center`, lg: `left`}}
                            >
                                Hi, I&apos;m Humayon!
                            </Heading>
                            <chakra.p
                                maxW='650px'
                                textAlign={{base: `center`, lg: `left`}}
                                fontSize='xl'
                                mt={2}
                            >
                                Welcome to my website! I use this to show some of my{' '}
                                <Link href='/projects' passHref>
                                    <ChakraLink>projects</ChakraLink>
                                </Link>{' '}
                                off, and test things out. You can see what music I am listening to on the{' '}
                                <Link href='/music' passHref>
                                    <ChakraLink>music page</ChakraLink>
                                </Link>{' '}
                                or the{' '}
                                <Link href='/links' passHref>
                                    <ChakraLink>websites</ChakraLink>
                                </Link>{' '}
                                &{' '}
                                <Link href='/links' passHref>
                                    <ChakraLink>tools</ChakraLink>
                                </Link>{' '}
                                that I like. Sometimes I even write{' '}
                                <Link href='/blog' passHref>
                                    <ChakraLink>blogs</ChakraLink>
                                </Link>
                                .
                            </chakra.p>
                        </Flex>
                    </Flex>
                    <InView threshold='1' triggerOnce='true' as="div" onChange={setShowTerminal}>
                        {showTerminal && <AboutTerminal/>}
                    </InView>
                </Flex>
            </Box>
        </>
    );
}
