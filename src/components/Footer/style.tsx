import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100vw;
    background: #181818;
    color: #fff;
    padding: 1rem 0;
    position: fixed;
    bottom: 0;
    z-index: 2;
    box-shadow: 0 2px 6px #0f0f0f;
`

export const FooterContent = styled.div`
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 .5rem
`

export const Copyright = styled.span`
    color: #6b6b6b;
    font-size: .75rem;
`

export const FooterContact = styled.div`
    display: flex;
    gap: .875rem
`

export const FooterLink = styled.a`
    color: var(--title-color);
    text-decoration: none;
    transition: all .2s ease;

    &:hover {
        color: var(--link-highlight-color)
    }
`

export const CopyrightLink = styled.a`
    color: #6b6b6b;
    font-size: .75rem;
    text-decoration: underline;
    transition: all .2s ease;

    &:hover {
        color: var(--link-highlight-color);
        text-shadow: .0625rem 0 .3125rem var(--link-highlight-color)
    }
`