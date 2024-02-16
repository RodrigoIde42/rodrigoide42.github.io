import styled from "styled-components";

export const CodingSkillContent = styled.div`
    max-width: 7.5rem;
    display: flex;
    gap: .75rem;
    flex-direction: column;

    @media screen and (max-width: 1025px) {
        max-width: 5.75rem
    }
`

export const CirclePercentage = styled.div<{ $percentage: number }>`
    position: relative;
    width: 7.5rem;
    height: 7.5rem;

    &:before {
        position: absolute;
        content: "";
        border-radius: 50%;
    }
    
    &:before {
        inset:0;
        background:
            conic-gradient(var(--highlight-color) calc(${props => props.$percentage}*1%),var(--txt-color) 0);
        -webkit-mask:radial-gradient(farthest-side,transparent calc(99% - .5rem),#000 calc(100% - .5rem));
                mask:radial-gradient(farthest-side,transparent calc(99% - .5rem),#000 calc(100% - .5rem));
    }

    @media screen and (max-width: 1025px) {
        width: 5.75rem;
        height: 5.75rem;
    }
`

export const CirclePercentageText = styled.span`
    position: absolute;
    display: block;
    vertical-align: middle;
    width: 7.5rem;
    height: 7.5rem;
    text-align: center;
    color: var(--txt-color);
    line-height: 7.5rem;
    font-size: 1.25rem;

    @media screen and (max-width: 1025px) {
        width: 5.75rem;
        height: 5.75rem;
        line-height: 5.75rem
    }
`

export const CodingSkillName = styled.p`
    color: var(--txt-color);
    text-align: center;
    margin: 0
`