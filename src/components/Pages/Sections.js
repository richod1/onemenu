import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';

function Sections() {
    const [content,setContent]=useState([]);

    useEffect(()=>{
        axios 
        .get("")
        .then((response)=>{
            setContent(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div>
        <Container>
        <Wrapper>
            <ContentImg></ContentImg>
            <ContentName></ContentName>
            <ContentLocation></ContentLocation>
            <ContentFoods></ContentFoods>
            <ContentDescription></ContentDescription>
        </Wrapper>
        </Container>

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







