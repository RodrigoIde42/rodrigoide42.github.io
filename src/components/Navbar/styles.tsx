import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    width: 100vw;
    background: #181818;
    padding: 1rem 0;
    position: fixed;
    box-shadow: 0 2px 6px #0f0f0f;
`

export const NavContent = styled.div`
    max-width: 1300px;
    display: grid;
    align-items: center;
    grid-template-columns: 45% auto;
    margin: 0 auto;
    padding: 0 .5rem;
`

export const NavItems = styled.div`
    display: flex;
    gap: .75rem;
    justify-content: right;
`

export const NavMain = styled(Link)`
    color: #cecece;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all .2s ease;

    &:hover {
        color: #fff;
        text-shadow: .0625rem 0 .3125rem #fff
    }
`

export const NavLink = styled(Link)`
    color: #cecece;
    text-decoration: none;
    transition: all .2s ease;

    &:hover {
        color: #2233ff;
        text-shadow: .0625rem 0 .3125rem #2233ff
    }
`