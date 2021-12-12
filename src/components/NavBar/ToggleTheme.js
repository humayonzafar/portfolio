import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'

const ToggleTheme = ()=> {
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(BiMoon, BiSun)
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            mr={{ base: 2, md: 0 }}
            size='md'
            fontSize='lg'
            aria-label={`Switch to ${text} mode`}
            title={`Switch to ${text} mode`}
            variant='ghost'
            onClick={toggleColorMode}
            icon={<SwitchIcon size={25} />}
        >test
        </IconButton>
    )
}

export default ToggleTheme
