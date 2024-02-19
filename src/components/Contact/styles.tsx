import styled, { css } from "styled-components";
import { ReactComponent as ChatIcon } from "../../assets/icons/icons8-chat-bubble.svg";
import { ReactComponent as GmailIcon } from "../../assets/icons/icons8-gmail.svg";
import { ReactComponent as AddressIcon } from "../../assets/icons/icons8-home.svg";
import { GlitchAnimation, spinner } from "../Resume/animations";

export const ContactInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 1.25rem 0;

    @media screen and (max-width: 1025px) {
        gap: 2.125rem;
        flex-direction: column;
        align-items: center;
    }
`

export const ContactInfo = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media screen and (max-width: 1025px) {
        gap: 1rem;
        align-items: center;
    }
`

export const ContactName = styled.span`
    display: flex;
    gap: 1.25rem;
    align-items: center;

    color: var(--title-color);
    font-weight: 600;
`

export const ContactLink = styled.a`
    color: var(--highlight-color);
    text-decoration: none;
    transition: all .2s ease;

    &:hover {
        color: var(--link-highlight-color);
        text-shadow: .0625rem .0625rem .75rem var(--link-highlight-color);
        text-decoration: underline; 
    }
`

export const ContactChatIcon = styled(ChatIcon)`
    fill: var(--highlight-color);
`

export const ContactGmailIcon = styled(GmailIcon)`
    fill: var(--highlight-color);
`

export const ContactAddressIcon = styled(AddressIcon)`
    fill: var(--highlight-color);
`

export const HireMeForm = styled.form`
    display: flex;
    gap: 1.25rem;
    flex-direction: column;

    @media screen and (max-width: 1025px) {
        padding: 0 1rem
    }
`

export const HireMeInput = styled.input`
    background: none;

    color: var(--txt-color);
    font-size: .875rem;
    
    border: none;
    border-bottom: .0625rem solid var(--txt-color);
    border-radius: 0;

    padding: 1.25rem 0;

    transition: all .2s ease;

    &:focus {
        color: var(--title-color);
        border-bottom: .0625rem solid var(--highlight-color);
        box-shadow: 0 .125rem .375rem -.25rem #23f5;
        outline: none;
    }
`

export const HireMeTextArea = styled.textarea`
    background: none;

    color: var(--txt-color);
    font-size: .875rem;
    font-family: 'Exo 2', 'sans-serif';
    
    border: none;
    border-bottom: .0625rem solid var(--txt-color);
    border-radius: 0;
    resize: none;

    padding: 1.25rem 0;

    transition: all .2s ease;
    
    &:focus {
        color: var(--title-color);
        border-bottom: .0625rem solid var(--highlight-color);
        box-shadow: 0 .125rem .375rem -.25rem #23f5;
        outline: none;
    }
`

export const HireMeButton = styled.button<{ $loading: boolean }>`
    max-width: 10rem;
    background-color: var(--highlight-color);
    position: relative;

    color: var(--title-color);
    text-align: center;
    font-size: .875rem;
    font-weight: 600;

    border: none;

    padding: .9375rem;
    margin-top: 1.5rem;

    cursor: pointer;

    ${props => 
        !props.$loading ? css`
            &:after {
                content: "Send Message";
                background-color: var(--highlight-color);
                width: 80%;
                display: block;
                position: absolute;
                top: 0; left: 0;
                clip-path: inset(50% 50% 50% 50%);
                padding: .9375rem;
            }

            &:hover:after {
                animation: 1s ${GlitchAnimation};
                animation-timing-function: steps(2, end);
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
        ` : css `
            background-color: var(--txt-color);

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: not-allowed;
        `
    }

    @media screen and (max-width: 1025px) {
        margin: 1.5rem auto 0;
    }
`

export const Spinner = styled.div`
    width: .625rem;
    height: .625rem;
    border: .125rem solid var(--link-highlight-color);
    border-top: .125rem solid var(--highlight-color);
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;
`