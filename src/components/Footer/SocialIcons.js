import React from 'react'
import { chakra, Tooltip, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'

const SocialIcons = ({ children, href, label })=>{
    return (
        <Tooltip label={label}>
            <chakra.button
                bg={useColorModeValue(`blackAlpha.100`, `whiteAlpha.100`)}
                rounded='full'
                w={8}
                h={8}
                cursor='pointer'
                as='a'
                rel="noopener"
                href={href}
                target={'_blank'}
                display='inline-flex'
                alignItems='center'
                justifyContent='center'
                transition='background 0.3s ease'
                _hover={{
                    bg: useColorModeValue(`blackAlpha.200`, `whiteAlpha.200`),
                }}
            >
                <VisuallyHidden>{label}</VisuallyHidden>
                {children}
            </chakra.button>
        </Tooltip>
    )
}

export default SocialIcons
