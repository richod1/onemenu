import React from 'react'
import styled from 'styled-components'
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
        <Container>
        <FooterWrapper>
            <FooterRow>
                {/* <FooterColumn>
                <FooterTitle>About Us</FooterTitle>
                    <FooterLink >Story</FooterLink>
                    <FooterLink >Clients</FooterLink>
                    <FooterLink >Testimonials</FooterLink>
                </FooterColumn> */}
                <FooterColumn>
                <FooterTitle>Services</FooterTitle>
                    <FooterLink >Marketing</FooterLink>
                    <FooterLink >Consulting</FooterLink>
                    <FooterLink >Development</FooterLink>
                    <FooterLink >Design</FooterLink>
                </FooterColumn>
                <FooterColumn>
                <FooterTitle>Contact Us</FooterTitle>
                    <FooterLink >United States</FooterLink>
                    <FooterLink >United Kingdom</FooterLink>
                    <FooterLink >Australia</FooterLink>
                    <FooterLink >Support</FooterLink>
                </FooterColumn>
                <FooterColumn>
                <FooterTitle>Social</FooterTitle>
                    <FooterLink >Facebook <BsFacebook/></FooterLink>
                    <FooterLink >Instagram <BsInstagram/></FooterLink>
                    <FooterLink >Youtube <BsYoutube/></FooterLink>
                    <FooterLink >Twitter <BsTwitter/></FooterLink>
                </FooterColumn>
            </FooterRow>
            </FooterWrapper>
        </Container>
    </div>
  )
}

export default Footer
const Container=styled.div`
padding: 80px 60px;
background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`
const FooterWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1000px;
margin: 0 auto;
`

const FooterRow=styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`

const FooterColumn=styled.div`
display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`

const FooterLink=styled.a`
color: #fff;
margin-bottom: 20px;
cursor:pointer;
font-size: 18px;
text-decoration: none;
&:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`
const FooterTitle=styled.p`
font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`