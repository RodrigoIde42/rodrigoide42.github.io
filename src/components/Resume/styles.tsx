import styled, { css } from "styled-components";
import ProfileImage from '../../assets/images/eu.jpg';
import { CheckIcon, ThickArrowDownIcon } from "@radix-ui/react-icons";
import { ArrowAnimation, GlitchAnimation } from "./animations";
import {ReactComponent as AnimeIcon} from '../../assets/icons/icons8-naruto.svg';
import {ReactComponent as ProgrammingIcon} from '../../assets/icons/icons8-código-do-google.svg';
import {ReactComponent as GamingIcon} from '../../assets/icons/icons8-arcade-de-maçã.svg';

export const Container = styled.section<{ $position?: string }>`
    ${(props) => {
        switch (props.$position) {
            case "top":
                return css`
                    padding: 0 0 3rem;
                `
            case "bottom":
                return css`
                    padding: 5rem 0 8rem;
                `
            default:
                return css`
                    padding: 3.5rem 0;
                `
        }
    }}
`

export const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ArrowButton = styled.button`
    position: absolute;
    bottom: 5rem;

    background: none;
    border: 0;
    outline: none;

    padding: 0;
    cursor: pointer;

    animation: ${ArrowAnimation} 1.25s linear infinite
`

export const ArrowIcon = styled(ThickArrowDownIcon)`
    color: var(--link-highlight-color);
    filter: drop-shadow(0 1px 3px var(--link-highlight-color));
`

export const Title = styled.h2<{ $textWidth: string }>`
    color: var(--title-color);
    font-weight: 600;
    position: relative;
    
    &:after {
        content: "";
        position: absolute;
        bottom: 0; left: 0;
        background-color: var(--title-color); 
        width: ${props => props.$textWidth};
        height: 25%;
        opacity: .3;

        @media screen and (max-width: 1025px) {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media screen and (max-width: 1025px) {
        text-align: center;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 10% 85%;
    grid-template-areas: 
        'image text' 
        '. info'
        '. button';
    row-gap: .75rem;
    column-gap: 2rem;
    justify-content: space-between;
    padding: 1.25rem 0;

    @media screen and (max-width: 1025px) {
        display: flex;
        padding: 1rem;
        align-items: center;
        flex-direction: column;
    }
`

export const Paragraph = styled.p`
    color: var(--txt-color);
    font-size: .875rem;
    text-align: justify;
    line-height: 1.5;
    margin: 0
`

export const ContentParagraph = styled(Paragraph)`
    grid-area: text;
    color: var(--txt-color);
    font-size: .875rem;
    text-align: justify;
    line-height: 1.5;
    margin: 0;

    @media screen and (max-width: 1025px) {
        text-align: center;
        padding: .5rem 0;
    }
`

export const Circle = styled.div`
    grid-area: image;
    position: relative;
    width: 100%;
    height: 9vw;
    display: inline-block;
    border-radius: 50%;

    &:after {
        content: "";
        display: block;
        width: 102%;
        height: 102%;
        position: absolute;
        top: 0; left: 0;
        border-radius: 50%;
        background: radial-gradient(ellipse at center, rgba(30,30,30,0) 0%,rgba(30,30,30,1) 70%,rgba(30,30,30,1) 100%);
    }

    @media screen and (max-width: 1025px) {
        width: 8rem;
        height: 8rem;
    }
`

export const Image = styled.img.attrs({
    src: ProfileImage
})`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border: .5px solid rgba(30, 30, 30, 1);
    border-radius: 50%;

    filter: grayscale(.8)
`

export const InfoContent = styled.div`
    grid-area: info;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: .25rem;

    @media screen and (max-width: 1025px) {
        display: flex;
        gap: .5rem;
        flex-direction: column;
    }
`

export const DownloadButton = styled.a`
    grid-area: button;
    max-width: 5.625rem;
    background-color: var(--highlight-color);
    position: relative;

    color: var(--title-color);
    text-align: center;
    font-size: .875rem;
    text-decoration: none;

    padding: .9375rem;
    margin-top: 1.5rem;
    
    &:after {
        content: "Download CV";
        background-color: var(--highlight-color);
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
`

export const ExperienceEducation = styled(Container)`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1.25rem;

    @media screen and (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem
    }
`

export const TimeInterval = styled.span<{ $linePosition?: string }>`
    position: relative;

    color: var(--highlight-color);
    font-weight: 600;
    font-size: .75rem;
    
    border: .0625rem solid var(--highlight-color);
    box-shadow: .0625rem .0625rem .25rem var(--highlight-color)a;
    padding: .3125rem .5625rem;
    margin-left: 1.875rem;

    &:before {
        content: "";
        position: absolute;
        top: 50%; left: -1.875rem;
        background-color: var(--highlight-color);
        width: 1.875rem;
        height: .125rem;
    }

    ${(props) => {
        switch (props.$linePosition) {
            case "top":
                return css`
                    &:after {
                        content: "";
                        background: var(--highlight-color);
                        width: .125rem;
                        height: .875rem;
                        position: absolute;
                        top: 0; left: -1.9375rem
                    }
                `
            case "bottom":
                return css`
                    &:after {
                        content: "";
                        background: var(--highlight-color);
                        width: .125rem;
                        height: .8125rem;
                        position: absolute;
                        top: 50%; left: -1.9375rem
                    }
                `
            case "both": 
                return css`
                    &:after {
                        content: "";
                        background: var(--highlight-color);
                        width: .125rem;
                        height: 2rem;
                        position: absolute;
                        top: 0; left: -1.9375rem
                    }
                `
            default:
                return
        }
    }}
`

export const ExpEduInfo = styled.div<{ $borderLeft?: boolean }>`
    border-left: ${props => props.$borderLeft ? ".125rem solid var(--highlight-color)" : 0};
    padding: .5rem 1.875rem 1rem;
`

export const ExpEduInfoTitle = styled.h3`
    color: var(--title-color);
    font-weight: 600;
    font-size: .875rem;
`

export const LanguageSkillsContent = styled(ExperienceEducation)`
    padding: 1rem 0;

    @media screen and (max-width: 1025px) {
        padding: 1rem
    }
`

export const CodingSkillsContent = styled.div`
    display: flex;
    gap: 8rem;
    flex-wrap: wrap;

    @media screen and (max-width: 1025px) {
        gap: 2rem;
        padding: 1rem;
    }
`

export const KnowledgesContent = styled(ExperienceEducation)`
    padding: 1rem 0;

    @media screen and (max-width: 1025px) {
        padding: 1rem;
    }
`

export const KnowledgeText = styled(Paragraph)`
    display: flex;
    gap: .5rem;
    align-items: center;
`

export const KnowledgeCheckIcon = styled(CheckIcon)`
    color: var(--highlight-color);
`

export const InterestContent = styled(InfoContent)`
    column-gap: 5rem;

    @media screen and (max-width: 1025px) {
        gap: 3rem;
        padding: 0 1rem;
    }
`

export const StyledAnimeIcon = styled(AnimeIcon)`
    fill: var(--highlight-color);
`

export const StyledProgrammingIcon = styled(ProgrammingIcon)`
    fill: var(--highlight-color);
`

export const StyledGamingIcon = styled(GamingIcon)`
    fill: var(--highlight-color);
`