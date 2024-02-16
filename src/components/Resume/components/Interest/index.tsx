import React from 'react'
import { InterestContent, InterestTitle } from './style'
import { Paragraph } from '../../styles'

interface Props {
    icon: any,
    interest: string,
    desc: string
}

export default function Interest({icon, interest, desc}: Props) {
    return (
        <InterestContent>
            <InterestTitle>
                {icon} {interest}
            </InterestTitle>
            <Paragraph>
                {desc}
            </Paragraph>
        </InterestContent>
    )
}