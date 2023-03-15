import React from 'react'
import styled from 'styled-components'
import {mobile, mobile_425width} from '../responsive'

const Container = styled.div`
  flex : 1;
  height: 70vh;
  margin : 5px; 
  position : relative;
  ${mobile({height: "40vh"})}
  ${mobile_425width({height: "40vh", width : "90%"})}
`
const Image = styled.img`
  width : 100%;
  height : 100%;
  object-fit : scale-down;
  ${mobile({objectFit: "cover"})}
  ${mobile_425width({objectFit: "cover"})}

`
const Info = styled.div`
  position: absolute;
  top : 0;
  left : 0;
  width: 100%;
  height: 100%;
  display : flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
`
const Title = styled.h1`
  color : #c45c1c;
  margin-bottom : 20px;
  ${mobile({fontSize: "1.2em", marginBottom : "2%", color: "#a3a805c0"})}
  ${mobile_425width({fontSize: "1.2em", marginBottom : "2%", color: "#a3a805c0"})}
`
const Button = styled.button`
  height : fit-content;
  border : 2px solid white; 
  padding : 10px;
  border-radius : 10%;
  background-color : white;
  color : grey;
  cursor : pointer;
  font-weight : 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem