import styled from "styled-components";
import ProfileImage from '../assets/images/eu.jpg';

export const Title = styled.h1`
    color: #fff;
    text-align: center;
`

export const Wrapper = styled.div`
    background: #222;
    display: grid;
    grid-template-columns: 10% 85%;
    row-gap: .75rem;
    column-gap: 2rem;
    align-items: center;
    justify-content: space-between;
    border-radius: .75rem;
    padding: 2rem;
    box-shadow: 0 2px 6px #2233ff;
`

export const Paragraph = styled.p`
    color: #fefefe;
    font-size: 1rem;
    text-align: justify;
`

export const Image = styled.img.attrs({
    src: ProfileImage
})`
    width: 100%;
    height: 9.25vw;
    object-fit: cover;
    border: .125rem solid #ccc;
    border-radius: 50%;
`