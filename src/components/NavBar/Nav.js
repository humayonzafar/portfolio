import React, {useState} from 'react';
import {
    Box,
    Flex,
    Link as ChakraLink,
    chakra,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {transparentize} from '@chakra-ui/theme-tools';
import useScrollPosition from '../../../src/hooks/useScrollPosition';
import {useEffect} from 'react';
import dynamic from "next/dynamic";
const AnimatedTitle = dynamic(() => import('@/components/NavBar/AnimatedTitle'))
const MobileNav = dynamic(() => import('./MobileNav'))
const DesktopNav = dynamic(() => import('./DesktopNav'))

const links = [
    {
        name: `Home`,
        link: `/`,
    },
    {
        name: `Projects`,
        link: `/projects`,
    },
    {
        name: `Resume`,
        link: `/resume`,
    },
    {
        name: `Contact`,
        link: `/contact`,
    }
];

const mobileLinks = [
    {
        name: `Home`,
        link: `/`,
    },
    {
        name: `Projects`,
        link: `/projects`,
    },
    {
        name: `Resume`,
        link: `/resume`,
    },
    {
        name: `Contact`,
        link: `/contact`,
    },
    {
        name: `Install App`,
        link: `#`,
    },
];


function Nav() {
    const router = useRouter();
    const {colorMode} = useColorMode();
    const [width, setWidth] = useState(0);
    const {y, max} = useScrollPosition();
    const {pathname} = useRouter();

    const blogPage = pathname === '/blog/[slug]';

    useEffect(() => {
        if (blogPage) {
            const newWidth = y / max;
            if (newWidth !== width) {
                setWidth(newWidth * 100);
            }
        }
    }, [y, max, width, blogPage]);
    return (
        <chakra.header
            width='full'
            position='fixed'
            _before={{
                transition: 'all 0.10s',
                transitionTimingFunction: '1 100 10 10',
                content: '""',
                width: width + '%',
                top: 0,
                left: 0,
                height: '6px',
                bg: useColorModeValue('brand.500', 'brand.300'),
                position: 'absolute',
                zIndex: 9999,
            }}
            top={0}
            left={0}
            zIndex={10}
            bg={useColorModeValue(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 41, 0.8)`)}
            sx={{backdropFilter: `saturate(180%) blur(5px)`}}
        >
            <chakra.nav mx='auto' p={3}>
                <Flex
                    margin='auto'
                    justifyContent='space-between'
                    alignContent='center'
                    maxW='7xl'
                    width='full'
                >
                    <Box display='flex' alignContent='center'>
                        <Link href='/' passHref>
                            {router.asPath === '/' ? (
                                <AnimatedTitle/>
                            ) : (
                                <ChakraLink
                                    fontSize='lg'
                                    margin='auto'
                                    fontWeight='semibold'
                                    position='relative'
                                    textTransform='capitalize'
                                    _after={{
                                        transition: `all 0.25s ease-in-out`,
                                        content: `''`,
                                        /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                                        outline: `1px solid transparent`,
                                        width: `0%`,
                                        height: `25%`,
                                        position: `absolute`,
                                        bottom: 1,
                                        left: 0,
                                        bg: colorMode === 'light'
                                            ? transparentize(`brand.500`, 0.46)
                                            : transparentize(`brand.500`, 0.36),
                                        zIndex: -1,
                                    }}
                                    _hover={{
                                        _after: {
                                            width: `100%`,
                                        },
                                        color: colorMode === 'light' ? `gray.900` : `white`,
                                    }}
                                    color={colorMode === 'light' ? 'gray.900' : 'white'}
                                >
                                   Humayon Zafar
                                </ChakraLink>
                            )}
                        </Link>
                    </Box>
                    <MobileNav links={mobileLinks}/>
                    <DesktopNav links={links}/>
                </Flex>
            </chakra.nav>
        </chakra.header>
    );
}

export default Nav;
