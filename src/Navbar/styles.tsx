import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    background: #181818;
    color: #fff;
    padding: 1rem 0;
    box-shadow: 0 2px 6px #0f0f0f;
`

export const NavContent = styled.div`
    max-width: 1300px;
    display: grid;
    grid-template-columns: 45% auto;
    margin: 0 auto
`

export const NavItems = styled.div`
    display: flex;
    gap: .75rem;
    justify-content: right;
`

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`