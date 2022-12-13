import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
//  import axios from 'axios';

function Sections() {
    const [content,setContent]=useState([]);
    // setContent(content);
    

    useEffect(()=>{
        // axios 
        fetch('https://fakestoreapi.com/products')
        .then((response)=> response.json())
        .then((json)=>setContent(json))
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
            {content.map((contents)=>(
              <Container>
              <Wrapper>
              <ContentImg>
                <img src={contents.image} alt="tis is the images"/>
              </ContentImg>
              <ContentName>{contents.title}</ContentName>
              <ContentFoods>{contents.category}</ContentFoods>
              <ContentLocation>{contents.price}</ContentLocation>
              <ContentDescription>{contents.description}</ContentDescription>
            </Wrapper>
            </Container>
    
        
            ))}
            </div>
        
  )
}

export default Sections
const Container=styled.div`
display:flex;
flext-direction:flex-start;
border:1px solid black;
background:#fff;
width:72px;
hieght:68px;

`
const Wrapper=styled.div`
border:1px solid black;
background:#fff;
`
const ContentImg = styled.div`
border:2px solid white;
`


  

const ContentName=styled.h2`

`
const ContentLocation=styled.span`

`
const ContentFoods=styled.h3`

`

const ContentDescription=styled.p`

`



//how to pass in img in styled components in react?















