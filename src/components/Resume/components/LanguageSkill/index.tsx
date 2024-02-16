import React from 'react'
import { LangProficiency, LangSkill, ProficiencyLevel } from './style';
import { Paragraph } from '../../styles';

interface Props {
    lang: string;
    proficiency: number; 
}

export default function LanguageSkill({ lang, proficiency }: Props) {
    return (
        <LangSkill>
            <Paragraph>
                {lang}
            </Paragraph>
            <LangProficiency>
                {[...Array(10)].map((_, i) => (
                    proficiency >= i + 1 ? <ProficiencyLevel key={i} $colored /> : <ProficiencyLevel key={i} $colored={false}/>
                ))}
            </LangProficiency>
        </LangSkill>
    )
}