import React from 'react'
import styled from 'styled-components';
import { Send } from '@mui/icons-material';
import {mobile} from '../responsive'


const Container = styled.div`
  height: 40vh;
  background-color : #fcf5d5;
  display : flex;
  align-items : center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight : 500;
  font-size : 50px;
  margin-bottom : 20px;
`;
const Description = styled.span`
  margin-bottom : 20px;
  font-weight : 400;
  font-size : 25px;
  ${mobile({textAlign: "center"})};
`;

const InputContainer = styled.div`
  width : 50%;
  height : 15%;
  display : flex;
  justify-content: space-between;
  border : 1px solid gray;
  background-color : white;
  ${mobile({width : "60%"})};

`;

const Input = styled.input`
  border : none;
  flex : 8; 
  padding : 10px;
  color : black;
  font-weight : 500;
`;

const Button = styled.button`
  flex : 1;
  background-color : teal;
  border : 1px solid lightgray;
  cursor : pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updates for all of your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter