import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
//  import axios from 'axios';

function Sections() {
    const [content,setContent]=useState([
      {
        id:1,
        image:"",
        title:"",
        category:"",
        price:30,
        description:""
      },
      {
        id:2,
        image:"",
        title:"",
        category:"",
        price:30,
        description:""
      },
      {
        id:3,
        image:"",
        title:"",
        category:"",
        price:30,
        description:""
      },
      {
        id:4,
        image:"",
        title:"",
        category:"",
        price:30,
        description:""
      },
      {
        id:5,
        image:"",
        title:"",
        category:"",
        price:30,
        description:""
      },
      {
        id:6,
        image:"",
        title:"",
        category:"",
        price:30,
        description:""
      },
      {
        id:7,
        image:"",
        title:"",
        category:"",
        price:30,
        description:"hello am done the api"
      }
    ]);
    // setContent(content);
    

    // useEffect(()=>{
    //     axios 
    //     .get('https://fakestoreapi.com/products')
    //     .then((response)=> response.json())
    //     .then((json)=>setContent(json))
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // },[])
  return (
    <div>
            {content.map((contents)=>(
              <Container>
              <Wrapper>
              <ContentImg>{contents.image}</ContentImg>
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

`
const Wrapper=styled.div`

`
const ContentImg=styled.div`

`
const ContentName=styled.h2`

`
const ContentLocation=styled.span`

`
const ContentFoods=styled.h3`

`

const ContentDescription=styled.p`

`


//how to display object arrays in react using useState?











