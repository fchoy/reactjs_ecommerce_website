import React from "react";
import styled from "styled-components";
import {device} from "../data.js"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient( 
      rgba(128, 128, 128, 0.2),
      rgba(128, 128, 128, 0.2)
    ),
    url("https://media.glamour.com/photos/569592ead9dab9ff41b2a68a/master/pass/fashion-2015-08-reformation-big-bust-collection-white-crop-top-main.jpg"); //mixes gradiant color w/ bg image
  background-position-x: 50%; //move bg image 50% from left horizontally
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding : 20px;
  background-color: rgba(128, 128, 128, 0.5);
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width : 80%;
    padding : 2%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color : peachpuff;
  margin-bottom : 10px;
  width : fit-content;

  @media ${device.mobile} {
    font-size : 2em;
  }
`;
const Form = styled.form`
  display: flex;
  width: 90%;
  flex-direction : column;
`;
const Input = styled.input`
    background-color : rgba(255,255,255, 0.8);
    border: none;
    margin-bottom : 10px;
    padding : 10px 0px;
    width : 60%;
    align-self : center;
    text-align: center;
    font-size : 1.1em;

    @media ${device.mobile} {
      width : 100%;
      padding : 15px 0px;
      margin-bottom : 7%;
    }
`;
const Agreement = styled.span`
    margin-bottom : 10px;
    font-weight: 400;
    color : white;
    @media ${device.mobile} {
      color : black;
      margin-bottom : 7%;
    }
`;
const Button = styled.button`
    width : 60%;
    padding : 10px 0px;
    align-self: center;
    border : 1px solid rgba(128,128,128, 0.7);
    font-weight : 300;
    font-size: 16px;

    &:hover{
        cursor : pointer;
        background-color: rgba(255,218,185, 0.8);
    }

    @media ${device.mobile} {
      width : 100%;
      padding : 15px 0px;
    }
`;

const Register = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, you consent to the processing of your
            personal data in accordance to <b>federal data processing laws</b>.
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
