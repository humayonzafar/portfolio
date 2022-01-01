import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Success() {
    return (
        <Box textAlign="center" py={10} px={6} color="white">
            <CheckCircleIcon boxSize={'50px'} color={'brand.500'}  />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Thank you for getting in touch!
            </Heading>
        </Box>
    );
}