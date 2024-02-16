import React from 'react'
import { CirclePercentage, CirclePercentageText, CodingSkillContent, CodingSkillName } from './style';

interface Props {
    name: string,
    percentage: number;
}

export default function CodingSkill({name, percentage}: Props) {
    return (
        <CodingSkillContent>       
            <CirclePercentage $percentage={percentage}>
                <CirclePercentageText>{percentage}%</CirclePercentageText>
            </CirclePercentage>
            <CodingSkillName>{name}</CodingSkillName>
        </CodingSkillContent>
    )
}