import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { BsMenuApp , BsMap , BsFillCursorFill, BsHouse,BsInfoCircle } from "react-icons/bs";
import { VscDebugStepInto } from "react-icons/vsc";

function NavBar() {
  return (
    <div>
        <Container>
            <Nav>
               <NavMenu>
                <NavItems>
                    <NavLink>HOME <BsHouse/></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>EXPLORE <BsFillCursorFill/></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>ONEMENU <BsMenuApp/></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>ONEPLACE <BsMap/></NavLink>
                </NavItems>
                <NavItems>
                    <NavLink>ABOUT <BsInfoCircle/></NavLink>
                </NavItems>
               </NavMenu>
            </Nav>
            <Navbtn>
                <NavbtnLink>JOIN <VscDebugStepInto/></NavbtnLink>
               </Navbtn>
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
margin-bottom:20px;
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
    transition:all 0.2s ease-in-out;
    
}
`
const Navbtn=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:20px;
`

const NavbtnLink=styled(Button)`
text-decoration:none;
outline:none;
border-radius:10px;
background:powderblue;
border:none;
padding:0.6rem 1rem;
color:#000;
cursor:pointer;
&:hover{
    background:#010607;
    transition:all 0.2s ease-in-out;
    color:#fff;
}
`