import React from "react";
import styled from "styled-components";
import {device} from "../data.js"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(128, 128, 128, 0.2),
      rgba(128, 128, 128, 0.2)
    ),
    url("https://pixeldivi.uxdividemos.com/wp-content/uploads/2019/12/dp-image-magnifier-04.jpg");
  background-size : cover; //makes background cover entire view
  background-position: center;
  background-position-y: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  background-color: rgba(128, 128, 128, 0.2);
  justify-content: center;
  align-items: center;
  
  @media ${device.mobile}{
    width : 70%;
    height : fit-content;
  }
`;
const Title = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: peachpuff;
  margin-bottom: 10px;

  @media ${device.mobile}{
    font-size : 3em;
    margin-bottom: 5%;
  }
`;
const Form = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.mobile}{
    height : fit-content;
  }
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  margin-bottom: 10px;
  padding: 5px 0px;
  width: 50%;
  align-self: center;
  @media ${device.mobile}{
    width : 100%;
    margin-bottom : 8%;
    padding : 5% 0px;
    text-align: center;
    font-size : 1.2em;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 50%;
  height: 100%;
  @media ${device.mobile}{
    margin-bottom : 8%;
    width: 80%;
  }
`;

const CheckBoxText = styled.span`
  margin-right: 10px;
  font-weight: 400;
  font-size: 15px;
  color: #e4dcdc;
  @media ${device.mobile}{
    font-size: 1.3em;
  }
`;

const Checkbox = styled.input`
  margin : auto 0;
  width : 2vw;
  height : 2vh;
  @media ${device.mobile}{
    font-size: 1.3em;
    width : 7vw;
    height : 7vh;
  }
`;

const Button = styled.button`
  width: 40%;
  padding: 10px 0px;
  align-self: center;
  border: 1px solid rgba(128, 128, 128, 0.7);
  font-weight: 400;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 218, 185, 0.6);
  }

  @media ${device.mobile}{
    width: 90%;
    margin-bottom : 8%;
    font-size : 1.2em;
  }
`;

const Link = styled.a`
  align-self: center;
  margin-top: 10px;
  color: #fce7a4;
  font-weight: 200;

  &:hover {
    cursor: pointer;
    opacity : 0.9;
  }

  @media ${device.mobile}{
    font-size : 1.2em;
    margin-bottom : 4%;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const Login = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <CheckboxContainer>
            <CheckBoxText>Remember Me</CheckBoxText> 
            <Checkbox type="checkbox"/>
          </CheckboxContainer>
          <Button>Login</Button>
          <Link>Forgot your password?</Link>
          <Link>Create A New Account</Link>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
