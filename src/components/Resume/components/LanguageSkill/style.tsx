import styled from "styled-components";

export const LangSkill = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
`

export const LangProficiency = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 3rem);

    @media screen and (max-width: 1025px) {
        grid-template-columns: repeat(10, 1fr)
    }
`

export const ProficiencyLevel = styled.div<{ $colored: boolean }>`
    background-color: ${props => props.$colored ? "var(--highlight-color)" : "var(--txt-color)"};
    width: 1rem;
    height: 1rem;
    border-radius: 50%
`