import React from "react";
import {Box, Heading, useColorModeValue} from '@chakra-ui/react';
import {CheckCircleIcon, CloseIcon} from '@chakra-ui/icons';

export default function Response({showResponse}) {
    return (
        <Box textAlign="center" py={10} px={'auto'} color="white" bg={useColorModeValue('gray.900', 'gray.700')} >
            {showResponse
                ? <CheckCircleIcon boxSize={'50px'} color={'brand.500'} bg={'white'} borderRadius={'50%'}/>
                : <CloseIcon boxSize={'50px'} color={'red.500'}/>
            }
            <Heading as="h3" size="xl" mt={6} mb={2}>
                {showResponse ? 'Thank you for getting in touch!' : 'Something went wrong!'}
            </Heading>
        </Box>
    );
}