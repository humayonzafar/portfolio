import React from 'react';
import {SimpleGrid,} from '@chakra-ui/react';
import LineHeading from "@/components/LineHeading";
import SkillImage from "@/components/Skills/SkillImage";
import {skills} from "@/data/skills";

const Skills = () => (
    <>
        <LineHeading fontSize={{base: `2xl`, md: `3xl`}} mx='auto' textAlign='center' m='1rem'>
            Skills
        </LineHeading>
        <SimpleGrid
            placeItems={'center'}
            columns={{lg: 5, md: 5, sm: 2, base: 2}}
            gridTemplate={{lg: `1fr 1fr 1fr 1fr 1fr`, md: `1fr 1fr 1fr 1fr 1fr`, base: `1fr 1fr`, sm: `1fr 1fr`}}
            mx='auto' maxW='7xl' py={4} px={5} spacing='40px' justifyContent='center' alignItems='center'>
            {skills.map((skill) => (
                < SkillImage tooltip={skill.tooltip} src={skill.src} key={skill.tooltip}/>
            ))}
        </SimpleGrid>
    </>
)

export default Skills;
