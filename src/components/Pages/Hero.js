import React from 'react'
import styled from 'styled-components'


function Hero() {
  return (
    <div>
        
        <Container>
            <LogoContainer>
        <Logo1>
            <img src="https://o.remove.bg/downloads/bbdb7484-fc58-4797-bfd8-5a752d7b78e9/images-removebg-preview.png" alt="Logo"/>    
            </Logo1>
            </LogoContainer>
        <HeroSection>
        <img src="https://images.pexels.com/photos/3324438/pexels-photo-3324438.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Hero Section"/>
        </HeroSection>
        <Content>
            <H1>OneMenu</H1>
            <P>Search all what you looking for!!</P>
        </Content>
        </Container>

    </div>
  )
}

export default Hero
const Container=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:800px;
position:relative;
z-index:1
`
const Logo1=styled.div`
z-index:3;
height:50px;
width:50px;
display:flex;
position:fixed;
overflow:hidden;
cursor:pointer;
`
const LogoContainer=styled.div`
height:100%;
width:100%;

margin-top:1rem;
`
const HeroSection=styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;

img{
    width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
}
`

const Content=styled.div`
z-index:3;
max-width:100vw;
height:85vh;
padding:5px 24px;
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
`
const H1=styled.h1`
color:#fff;
font-size:58px;
text-align:center;

@media screen and(max-width:768px){
    font-size:40px;
}
@media screen and (max-width: 480px){
    font-size:32px;
}
`
const P=styled.p`
margin-top:24px;
color:#fff;
font-size:24px;
text-align:center;
max-width:600px;
@media screen and(max-width:768px){
    font-size:24px;
}
@media screen and (max-width: 480px){
    font-size:18px;
}
`