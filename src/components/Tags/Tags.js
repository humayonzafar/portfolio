import {getTotalCharCode} from '@/utils/utils';
import {Stack, Tag, TagLeftIcon, TagLabel, useMediaQuery} from '@chakra-ui/react';
import React from 'react';
import {BsFillLightningFill} from 'react-icons/bs';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {IoLogoNodejs} from 'react-icons/io';
import {SiMongodb, SiStrapi, SiNextDotJs} from 'react-icons/si';

const tagDict = {
    React: FaReact,
    Node: IoLogoNodejs,
    'Chakra-UI': BsFillLightningFill,
    'Express': FaNodeJs,
    'MongoDB': SiMongodb,
    'Rest': SiStrapi,
    'Next': SiNextDotJs
};

const Tags = ({tags}) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    return (
        <Stack height='25px' isInline>
            {tags?.map(tag => (
                <Tag
                    key={tag}
                    colorScheme={`${
                        ['red', 'orange', 'yellow', 'green', 'brand', 'teal', 'blue', 'cyan', 'pink', 'purple'][
                        getTotalCharCode(tag) % 10
                            ]
                    }`}
                    size={isLargerThan800 ? 'md' : 'sm'}
                >
                    <TagLeftIcon marginInlineEnd={'6px'} as={tagDict[tag]}></TagLeftIcon>
                    <TagLabel fontWeight={'600'}>{tag}</TagLabel>
                </Tag>
            ))}
        </Stack>
    );
};

export default Tags;
