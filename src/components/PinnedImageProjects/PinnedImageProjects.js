import {
    AspectRatio,
    Box,
    Heading,
    Text,
    VStack,
    useBreakpointValue,
    useColorMode,
    Link as ChakraLink,
    Stack,
    Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ImageCard from '../ImageCard';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Tags from '../Tags';

const PinnedImageProjects = ({
                                 projectData,
                                 repo,
                                 left,
                             }) => {
    const { colorMode } = useColorMode();
    const bp = useBreakpointValue({ base: `base`, lg: `lg` });
    if (bp === `lg`) {
        return (
            <Box position='relative' width='100%' py={5}>
                <Box maxWidth={{ lg: `83%`, xl: `90%` }} ml={left ? `auto` : 0}>
                    <AspectRatio ratio={16 / 9}>
                        <Box
                            boxShadow='xl'
                            borderRadius='2xl'
                            border='1px solid'
                            borderColor={colorMode === 'light' ? `gray.200` : `gray.600`}
                        >
                            <Image
                                alt={projectData?.name + 'screenshot'}
                                src={projectData?.image || ''}
                                layout='fill'
                            />
                        </Box>
                    </AspectRatio>
                </Box>
                <Box
                    maxHeight='full'
                    boxShadow='lg'
                    position='absolute'
                    left={left ? { lg: `0`, xl: `-10%` } : ``}
                    right={left ? `` : { lg: `0`, xl: `-10%` }}
                    top='50%'
                    transform='translate(0, -50%)'
                    borderRadius='2xl'
                    bg={colorMode === 'light' ? `white` : `gray.900`}
                    p={5}
                    width='45%'
                    maxWidth='600px'
                    whiteSpace='normal'
                    minHeight='35%'
                    border='1px solid'
                    borderColor={colorMode === 'light' ? `gray.200` : `gray.700`}
                >
                    <VStack maxHeight='full' height='full' width='full' maxWidth='full'>
                        <Stack width='full'>
                            <Flex justifyContent='space-between'>
                                <Heading isTruncated>{projectData.name}</Heading>
                                <Stack isInline justifyContent='flex-end' alignItems='center' spacing={4} mr={1}>
                                    {projectData?.html_url && (
                                        <Link href={projectData?.html_url} passHref>
                                            <ChakraLink isExternal className={`hover-link-${colorMode}`}>
                                                <FaGithub size={23} />
                                            </ChakraLink>
                                        </Link>
                                    )}
                                    {projectData?.deployedLink && (
                                        <Link href={projectData.deployedLink} passHref>
                                            <ChakraLink isExternal className={`hover-link-${colorMode}`}>
                                                <FaExternalLinkAlt size={20} />
                                            </ChakraLink>
                                        </Link>
                                    )}
                                </Stack>
                            </Flex>

                            <Tags tags={projectData?.stack} />
                        </Stack>
                        <Text height='full' pt={2}>
                            {projectData.longDescription}
                        </Text>
                    </VStack>
                </Box>
            </Box>
        );
    }
    return <ImageCard projectData={projectData} repo={repo} />;
};

export default PinnedImageProjects;
