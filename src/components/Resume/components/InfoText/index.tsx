import React from 'react'
import styled from 'styled-components'

const InfoText = styled.span<{ $color: string }>`
    color: ${props => props.$color};
    font-size: .875rem;

    @media screen and (max-width: 1025px) {
        text-align: center;
    }
`

interface Props {
    desc: string;
    info: string
}

export default function InfoTextComponent({desc, info}: Props) {
    return (
        <InfoText $color='#aaa'><InfoText $color='#56f'>{desc} </InfoText>{info}</InfoText>
    )
}