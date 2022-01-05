import {
    Box,
    Flex,
    Button,
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
                minH='100vh'
                height='full'
                width={{base: '95%', md: '90%', lg: '80%', xl: '90%W'}}
                maxW='7xl'
                mx='auto'
                pt={{base: '28', sm: '14', md: '16', xl: '20'}}
                mb='1rem'
            >
                <Flex
                    direction={{base: 'column', md: 'row', sm: 'column', lg: 'row'}}
                    justifyContent={{base: 'center', md: 'space-between'}}
                    height='full'
                    width='full'
                    pt={{base: 0, sm: 8}}
                    pb={{base: 0, sm: 8}}
                    pl={{base: 0, sm: 6}}
                    pr={{base: 0, sm: 6}}
                >
                    <Box>
                        <LineHeading fontSize={{base: `1xl`, md: `2xl`}} mx='auto' textAlign='left'>
                            Experience
                        </LineHeading>
                        <Experience/>
                    </Box>
                    <Box>
                        <LineHeading fontSize={{base: `1xl`, md: `2xl`}} mx='auto' textAlign='left'>
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
            </Box>
        </>
    );
}
