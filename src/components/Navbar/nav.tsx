import React from 'react'
import { Nav, NavContent, NavItems, NavLink, NavMain } from './styles'

export default function Navbar() {
    return (
        <Nav id='navbar'>
            <NavContent>
                <div>
                    <NavMain to='/'>Ide</NavMain>
                </div>
                <NavItems>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='resume'>Resume</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                </NavItems>
            </NavContent>
        </Nav>
    )
}