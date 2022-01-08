import {
    Box,
    Flex,
    Button, Text, Heading
} from '@chakra-ui/react';
import React from 'react';
import {NextSeo} from 'next-seo';
import LineHeading from "@/components/LineHeading";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import {FaFileDownload} from 'react-icons/fa';
import Skills from "@/components/Skills";

export default function Resume() {
    return (
        <>
            <NextSeo title='Resume'/>
            <Box
                width='full' px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'
            >
                <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
                    <LineHeading fontSize={{base: `5xl`, md: `6xl`}} mx='auto' textAlign='center'>
                        Resume
                    </LineHeading>
                    <Text mt={3}>My Education, Experience and Skills.</Text>
                    <Flex
                        direction={{base: 'column', md: 'row', sm: 'column', lg: 'row'}}
                        justifyContent={{base: 'center', md: 'space-between'}}
                        height='full'
                        width='full'
                        my={16}
                    >
                        <Box>
                            <LineHeading fontSize={'2xl'} display={'inline-block'} textAlign={{base: `center`, md: `left`}}>
                                Experience
                            </LineHeading>
                            <Experience/>
                        </Box>
                        <Box>
                            <LineHeading fontSize={'2xl'} display={'inline-block'} textAlign={{base: `center`, md: `left`}}>
                                Education
                            </LineHeading>
                            <Education/>
                        </Box>
                    </Flex>
                    <Skills/>
                    <Box textAlign='center' width='full' mt='2rem' mx='auto'>
                        <Button
                            as='a'
                            bg='brand.600'
                            target='blank'
                            color='white'
                            mt='1rem'
                            size='lg'
                            rightIcon={<FaFileDownload/>}
                            _hover={{color: 'white', bg: 'brand.800'}}
                            href='https://drive.google.com/file/d/15ovXVBOQ0sD1jXHRkY8mPv99o4wgWY7J/view'
                        >
                            Download Resume
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
