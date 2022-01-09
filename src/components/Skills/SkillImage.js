import {Image, Tooltip} from "@chakra-ui/react";
import React from "react";
const SkillImage = ({tooltip, src}) => (
    <>
        <Tooltip label={tooltip}>
            <Image height={{base:"55px", md:"60px"}} width="auto" objectFit='contain' src={src}/>
        </Tooltip>
    </>
);

export default SkillImage;