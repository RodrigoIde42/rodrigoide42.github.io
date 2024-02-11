import React from 'react'
import { Nav, NavContent, NavItems, NavLink } from './styles'

export default function Navbar() {
    return (
        <Nav id='navbar'>
            <NavContent>
                <NavLink to='/'>Ide</NavLink>
                <NavItems>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='resume'>Resume</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                </NavItems>
            </NavContent>
        </Nav>
    )
}