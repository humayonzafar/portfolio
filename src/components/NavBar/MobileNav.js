import React from 'react'
import {
    Box,
    Button,
    CloseButton,
    IconButton,
    useColorModeValue,
    useDisclosure,
    VStack,
    Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
import ToggleTheme from './ToggleTheme'

let appInstalled = false;
let prompt;

if (typeof window !== "undefined") {
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        if (document.referrer.startsWith('android-app://') || navigator.standalone || isStandalone) {
            appInstalled = true;
        }
    window.addEventListener('beforeinstallprompt', function (e) {
        // Prevent the infobar from appearing on mobile
        e.preventDefault();
        prompt = e;
    },{once: true});
    window.addEventListener("appinstalled", evt => {
        appInstalled = true;
    },{once: true});
}


function MobileNav({links}) {
    const mobileNav = useDisclosure();
    const handleInstallClick = (e) => {
        if (prompt) {
            prompt.prompt();  // Show the install prompt
        }
    };
    return (
        <Box display={{md: `none`}}>
            <ToggleTheme/>

            <IconButton
                aria-label='toggle menu'
                icon={
                    mobileNav.isOpen ? (
                        <CloseButton style={{zIndex: 20}} aria-label='Close menu'/>
                    ) : (
                        <AiOutlineMenu size='1.5em'/>
                    )
                }
                variant='ghost'
                onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
            />

            <VStack
                pos='absolute'
                top={0}
                left={0}
                width='100vw'
                height='100vh'
                css={{
                    backdropFilter: `saturate(180%) blur(5px)`,
                    backgroundColor: useColorModeValue(`rgba(255, 255, 255, 0.9)`, `rgba(26, 32, 44, 0.9)`),
                }}
                display={mobileNav.isOpen ? `flex` : `none`}
                flexDirection='column'
                spacing={3}
                rounded='sm'
                shadow='sm'
            >
                {links.map((link, index) => {
                    if (link.type === `dropdown`) {
                        return link.links.map((item, i) => (
                            <Link href={item.link} key={`${i.toString()}link`} passHref>
                                <Button key={i.toString()} as={ChakraLink} w='full' mx={2} variant='ghost'>
                                    {item.name}
                                </Button>
                            </Link>
                        ))
                    }
                    if(link.link==='#'){
                        if(appInstalled && prompt==null){
                            return  <></>;
                        }
                        else{
                            return (
                                <Button key={index.toString()} as={ChakraLink} w='full' mt={index===0?16:0} mx={2} variant='ghost' onClick={handleInstallClick}>
                                    {link.name}
                                </Button>
                            )
                        }
                    }
                    else{
                        return (
                            <Link href={link.link} key={`${index.toString()}link`} passHref >
                                <Button key={index.toString()} as={ChakraLink} w='full' mt={index===0?16:0} mx={2} variant='ghost'>
                                    {link.name}
                                </Button>
                            </Link>
                        )
                    }
                })}
            </VStack>
        </Box>
    )
}

export default MobileNav;
