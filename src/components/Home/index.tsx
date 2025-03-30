import React from 'react'
import { Content, GlitchyTitle, Text } from './style'

export default function Home() {
    let textsToWrite = ["Aspiring full stack developer, experienced Front-end developer", "Graduated in Computer Science", "Based in São Paulo - Brazil"]  

    return (
        <Content>
            <GlitchyTitle $customText="Hello, I'm Rodrigo!">Hello, I'm Rodrigo!</GlitchyTitle>
            <Text strings={textsToWrite} typeSpeed={50} loop />
        </Content>
    )
}