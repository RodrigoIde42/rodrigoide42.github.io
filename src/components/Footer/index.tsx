import React from 'react'
import { Copyright, CopyrightLink, FooterContact, FooterContainer, FooterContent, FooterLink } from './style'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
    return (
        <FooterContainer id='footer'>
            <FooterContent>
                <Copyright>@2025 Rodrigo Ide. Icons by <CopyrightLink href="https://icons8.com/" target='__blank'>Icons8</CopyrightLink></Copyright>
                <FooterContact>
                    <FooterLink href='https://www.linkedin.com/in/rodrigo-kenji-ide' target='__blank'><LinkedInLogoIcon /></FooterLink>
                    <FooterLink href='https://github.com/RodrigoIde42' target='__blank'><GitHubLogoIcon /></FooterLink>
                </FooterContact>
            </FooterContent>
        </FooterContainer>
    )
}