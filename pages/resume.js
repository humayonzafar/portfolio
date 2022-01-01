import {
    Box,
    Flex,
    Text,
    Heading,
    List,
    HStack,
    ListItem,
    VStack,

    Image,
    chakra,
    useColorModeValue,
    Skeleton,
    Link as ChakraLink,
    useBreakpoint,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, {useState} from 'react';
import {NextSeo} from 'next-seo';
import LineHeading from "@/components/LineHeading";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

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
            >
                <Flex
                    direction='row'
                    justifyContent={{base: 'center', md: 'space-between'}}
                    height='full'
                    width='full'
                    p={{base: 0, sm: 16}}
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
                        <Education />
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
