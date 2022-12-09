import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <div>
        <Container>
            <Nav>
               <NavMenu>
                <NavItems>
                    <NavLink></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink></NavLink>
                </NavItems>
               </NavMenu>
            </Nav>
        </Container>
    </div>
  )
}

export default NavBar
const Container=styled.div`

`

const Nav=styled.nav`

`

const NavMenu=styled.div`

`

const NavItems=styled.ul`

`

const NavLink=styled.li`

`