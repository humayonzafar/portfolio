import React from "react";
import {
    Flex,
    Box,
    Heading,
    Text
} from '@chakra-ui/react';
import Link from "next/link";
import LineHeading from "@/components/LineHeading";

export default function Offline() {
    return (
        <>
            <Box
                width='full' px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'
            >
                <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
                    <Heading fontSize={{ base: `5xl`, md: `6xl` }} mx='auto' textAlign='center'>
                        Connect to the Internet
                    </Heading>
                    <Text mt={3}>Your are offline. Check your connection.</Text>
                </Flex>
            </Box>
        </>
    );
}