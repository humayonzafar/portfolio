import {Box, Flex, Heading, HStack, List, ListItem, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {experienceData} from "@/data/experience";

const Experience = _ => {
    return (
        <List paddingBottom='1rem'>
            {
                (experienceData ?? []).map(({company, location, designation, type, duration}, index) => {
                    const isLastElement = index === experienceData.length - 1;
                    const isFirstElement = index === 0;
                    return (
                        <ListItem
                            key={company}
                            zIndex={1}
                            paddingTop={4}
                            position='relative'
                        >
                            <Flex
                                left='5px'
                                top={isFirstElement ? 5 : 0}
                                width='2.5px'
                                bottom={0}
                                height={isLastElement ? 5 : 'unset'}
                                zIndex={-1}
                                position='absolute'
                                backgroundColor='gray.100'
                            />
                            <HStack
                                width='full'
                                alignItems='flex-start'
                                justifyContent='flex-start'
                            >
                                <Box
                                    minWidth='14px'
                                    height='14px'
                                    marginTop={1}
                                    borderRadius='full'
                                    bgGradient='linear(to-r, brand.600, brand.800)'
                                />
                                <VStack
                                    width='full'
                                    spacing={2}
                                    textAlign='left'
                                >
                                    <Heading
                                        width='full'
                                        size='sm'
                                        textAlign='left'
                                    >
                                        {company} ({duration})
                                    </Heading>
                                    <Box as='p'
                                         width='full'
                                         variant='regular'
                                         textAlign='left'
                                    >
                                        <Text as='i' fontSize='14px' width='full' variant='regular' textAlign='left'>{location}</Text>
                                        <Text size='xs' width='full' variant='regular' textAlign='left'>{designation} ({type})</Text>
                                    </Box>
                                </VStack>
                            </HStack>
                            <Flex
                                left='5px'
                                top={5}
                                width='2.5px'
                                height='70px'
                                zIndex={-1}
                                position='absolute'
                                backgroundColor='gray.100'
                            />
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default Experience;