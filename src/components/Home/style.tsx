import styled from "styled-components";
import { glitchyAnimation1, glitchyAnimation2, glitchyAnimationMobile1, glitchyAnimationMobile2 } from "./glitchAnimation";
import { ReactTyped } from "react-typed";


export const Content = styled.section`
    min-height: 100vh;
    display: flex;
    gap: .875rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const GlitchyTitle = styled.h1<{ $customText: string }>`
    color: var(--title-color);
    position: relative;
    font-size: 5rem;
    text-align: center;
    margin: 0; 

    &:before,
    &:after {
        content: "${props => props.$customText}";
        color: var(--title-color);
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        top: 0;
        left: 3px;
    }

    &:before {
        text-shadow: -2px 0 red;
        animation-name: ${glitchyAnimation1};
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: reverse-alternate;
    }
    &:after {
        text-shadow: -2px 0 blue;
        animation: ${glitchyAnimation2};
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: reverse-alternate;
    }

    @media (max-width: 1025px) {
        overflow: hidden;

        &:before {
            animation-name: ${glitchyAnimationMobile1}
        }

        &:after {
            animation-name: ${glitchyAnimationMobile2}
        }
    }
`

export const Text = styled(ReactTyped)`
    color: var(--txt-color);
    text-align: center
` 