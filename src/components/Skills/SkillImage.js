import {Image, Tooltip} from "@chakra-ui/react";
import React from "react";
const SkillImage = ({tooltip, src}) => (
    <>
        <Tooltip label={tooltip}>
            <Image height="75px" width="75ppx" objectFit='contain' src={src}/>
        </Tooltip>
    </>
);

export default SkillImage;