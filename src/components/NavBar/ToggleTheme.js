import { IconButton, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'
import useSound from "use-sound";

const ToggleTheme = ()=> {
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(BiMoon, BiSun);
    const { colorMode, toggleColorMode } = useColorMode();
    const [play] = useSound("lightswitch.mp3", {
        volume: 0.05,
        sprite: {
            on: [0, 300],
            off: [500, 300],
        },
    });
    const handleClick = () => {
        toggleColorMode();
        colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
    };
    return (
        <Tooltip
            label={colorMode === "dark" ? "Light mode" : "Dark mode"}
            aria-label="A tooltip"
        >
        <IconButton
            mr={{ base: 2, md: 0 }}
            size='md'
            fontSize='lg'
            aria-label={`Switch to ${text} mode`}
            title={`Switch to ${text} mode`}
            variant='ghost'
            icon={<SwitchIcon size={25} />}
            onClick={handleClick}
        />
        </Tooltip>
    )
}

export default ToggleTheme
