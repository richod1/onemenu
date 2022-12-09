import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <div>
        <Container>
            <Nav>
               <NavMenu>
                <NavItems>
                    <NavLink>HOME</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>EXPLORE</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>ONEMENU</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>ONEPLACE</NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>ABOUT</NavLink>
                </NavItems>
               </NavMenu>
            </Nav>
        </Container>
    </div>
  )
}

export default NavBar
const Container=styled.div`
height:80px;
position:sticky;
display:flex;
width:92%;
border-radius:13px;
padding:0 30px;
margin-right:20px;
margin-top:10px;
margin-left:10px;
border:none;
justify-content:space-between;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media screen and (max-width:760px){
    width:90%;
    font-size:bold;
}
@media screen and (max-width:460px){
    width:50%;
    font-size:1.5rem;
}
`

const Nav=styled.nav`
display:flex;
grid-templete-columns:repeat(6, auto);
grid-gap:20px;
justify-content:center;
`

const NavMenu=styled.div`
display:flex;
list-style:none;
text-align:center;
margin-right:-22px;
@media screen and(max-width: 780px){
    display:none
}
`

const NavItems=styled.ul`
display:flex;
justify-content:space-between;
text-align:center;
`

const NavLink=styled.li`
list-style:none;
text-decoration:none;
cursor:pointer;
margin-left:20px;
font-size:1.2rem;
padding:0.7rem 1rem;
color:#000;
white-space:nowrap;


&:hover{
    background:teal;
    color:#fff;
    font-size:1.2rem;
    border-radius:10px;
    
}
`