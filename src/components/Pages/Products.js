import React from 'react'
import styled from 'styled-components'

function Products() {
  return (
    <div>
        <Container>
            <ContentH1>OUR PRODUCTS</ContentH1>
            <Content>
                <ContentCard>
                    <ContentImg></ContentImg>
                    <ContentDes></ContentDes>
                    <ContentP></ContentP>
                </ContentCard>
                <ContentCard>
                    <ContentImg></ContentImg>
                    <ContentDes></ContentDes>
                    <ContentP></ContentP>
                </ContentCard>
                <ContentCard>
                    <ContentImg></ContentImg>
                    <ContentDes></ContentDes>
                    <ContentP></ContentP>
                </ContentCard>
                <ContentCard>
                    <ContentImg></ContentImg>
                    <ContentDes></ContentDes>
                    <ContentP></ContentP>
                </ContentCard>

            </Content>
        </Container>
    </div>
  )
}

export default Products
const Container=styled.div`
height:700px;
display:flex;
aliign-items:center;
flex-direction:column;
justify-content:center;
background:#010606;
@media screen and(max-width:760px){
    height:110px;
}
@media screen and (max-width:480px){
    height:1300px;
}
`
const ContentH1=styled.h1`
font-size:2.5rem;
color:#fff;

align-items:center;
text-align:center;
@media screen and(max-width:480px){
    font-size:2rem;
}
`
const Content=styled.div`
max-width:100px;
margin:0;
display:flex;
// grid-templete-columns:1fr 1fr 1fr ;
align-items:center;

gap:16px;
padding:0 50px;
@media screen and( max-width: 1000px){
    grid-templete-columns:1fr 1fr 1fr ;
}
@media screen and(max-width: 760px){
    grid-templete-columns:1fr;
    padding:0 20px;
}
`
const ContentCard=styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,.2);
transition:all 0.2s ease-in-out;
&:hover{
    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor:pointer;
}
`

const ContentImg=styled.img`
height:160px;
width:160px;
margin-bottom:10px;
`
const ContentDes=styled.h2`
font-size:1.5rem;
margin-bottom:10px;
`

const ContentP=styled.p`
font-size:1rem;
align-items:center;
`