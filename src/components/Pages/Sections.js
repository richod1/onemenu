import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
// import axios from 'axios';

function Sections() {
    const [content,setContent]=useState([]);

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
              <ContentImg>{content.image}</ContentImg>
              <ContentName>{contents.title}</ContentName>
              <ContentFoods>{contents.category}</ContentFoods>
              <ContentLocation>{content.price}</ContentLocation>
              <ContentDescription>{content.description}</ContentDescription>
            </Wrapper>
            </Container>
    
        
            ))}
            </div>
        
  )
}

export default Sections
const Container=styled.div`

`
const Wrapper=styled.div`

`
const ContentImg=styled.img`

`
const ContentName=styled.h2`

`
const ContentLocation=styled.span`

`
const ContentFoods=styled.h3`

`

const ContentDescription=styled.p`

`







