import React from 'react';
import { Flex, chakra, useColorModeValue, VStack, Text, useBreakpoint} from '@chakra-ui/react';
import { useHotkeys } from 'react-hotkeys-hook';
import Head from 'next/head';

const Statement = ({
                       input,
                       result,
                       visibleIndex,
                       thisIndex,
                       setVisibleIndex,
                       enterPress,
                       setEnterPress
                   })=> {
    const [displayedIndex, setDisplayedIndex] = React.useState(0);
    const [showResult, setShowResult] = React.useState(false);
    const bp = useBreakpoint();
    let message = 'Please press enter to learn more...';
    useHotkeys('enter', onEnterKeyPressed);
    function onEnterKeyPressed(){
            if (thisIndex === visibleIndex && !enterPress) {
                setDisplayedIndex(input.length);
                setShowResult(true);
                setTimeout(() => {
                    setVisibleIndex(x => x + 1);
                }, 400);
            }
    }
    if(thisIndex===0 && ['base', 'sm'].includes(bp)){
        message = 'Executing....';
        setTimeout(onEnterKeyPressed, 3000);
        setEnterPress(()=>true);
    }
    const visible = thisIndex <= visibleIndex;
    React.useEffect(() => {
        if (!visible) {
            return;
        }
        if (showResult) {
            return;
        }
        if (visibleIndex !== 0) {
            if (displayedIndex >= input.length) {
                setTimeout(() => {
                    setShowResult(true);
                }, 200);

                setTimeout(() => {
                    setVisibleIndex(visibleIndex + 1);
                }, 500);
            }
        }
        if (visibleIndex === 0) {
            if( displayedIndex === 0){
                setTimeout(() => {
                    setDisplayedIndex(i => i + 1);
                }, 1500);
            }
            else if(displayedIndex <= 20){
                setTimeout(() => {
                    setDisplayedIndex(displayedIndex + 1);
                }, 25 + Math.random() * 75);
            }
            return;
        }
        setTimeout(() => {
            setDisplayedIndex(displayedIndex + 1);
        }, 25 + Math.random() * 75);
    }, [displayedIndex, input.length, showResult, visibleIndex, setVisibleIndex, thisIndex, visible]);
    const initialState = !showResult && displayedIndex >= input.length && thisIndex === 0;

    const shownInput = input.substring(0, displayedIndex);
    return (
        <>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <VStack spacing={1} alignItems='flex-start' visibility={visible ? 'visible' : 'hidden'}>
                <Flex fontFamily='Ubuntu Mono' fontSize='lg'>
                    <chakra.span
                        mr={2}
                        color={useColorModeValue('purple.500', 'purple.300')}
                        fontWeight='bold'
                    >
                        &gt;
                    </chakra.span>{' '}
                    {shownInput}
                </Flex>
                <Text
                    fontFamily='Ubuntu Mono'
                    fontSize='lg'
                    color={useColorModeValue('gray.500', 'gray.400')}
                    visibility={showResult || initialState ? 'visible' : 'hidden'}
                    alignSelf='flex-start'
                    dangerouslySetInnerHTML={{
                        __html: initialState ? message : result,
                    }}
                />
            </VStack>
        </>
    );
};

export default Statement;
