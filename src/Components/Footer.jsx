import React from "react";
import styled from "styled-components";
import { Facebook, Twitter, Instagram, Room, Phone, EmailOutlined } from "@mui/icons-material";
import creditcardlogos from "./Images/creditcardlogos.png"
import {mobile, mobile_425width} from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection : "column", width : "100vw"})};
  ${mobile_425width({flexDirection : "column", width : "100vw"})};

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  ${mobile({  padding: "1% 10%"})};
  ${mobile({  padding: "1% 10%"})};
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  ${mobile({textAlign : "center"})};
  ${mobile_425width({textAlign : "center"})};

`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0px;
  ${mobile({textAlign : "center"})};
  ${mobile_425width({textAlign : "center"})};

`;

const SocialMediaContainer = styled.div`
  display: flex;
  ${mobile({justifyContent : "center"})};
  ${mobile_425width({justifyContent : "center"})};

`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top : 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 5px;
  text-align: center;
  ${mobile({fontSize : "24px"})};
  ${mobile_425width({fontSize : "24px"})};

`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap; //flex-wrap : wrap will wrap the contents of a container either vertically or horizontally depending on the flex-direction after an item reaches the end of the flex-direction's max length.
`;
const ListItem = styled.li`
  width: 50%; //each item will take up 50% of it's row, which means that 2 items will be on each row.
  margin-bottom : 10px;
  text-align : center;
  cursor : pointer;
  ${mobile({height:"40px", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center"})};
  ${mobile_425width({height:"40px", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center"})};

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display : flex;
  flex-direction : column;
  align-items : center;
  ${mobile({padding : "10px"})};
  ${mobile_425width({padding : "10px"})};

`;

const ContactItem = styled.div`
    margin-bottom : 5px;
    display : flex;
    align-items : center; //center icons with text 
`;

const Payment = styled.img`
    width: 40%;
    height: 30%;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Evo</Logo>
        <Description>
          Comfortable and sustainable clothing, made just for you.
        </Description>
        <SocialMediaContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="55ACCE">
            <Instagram />
          </SocialIcon>
        </SocialMediaContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/> 1234 Some Address Road, Some City 91210</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +1 901 145 2234</ContactItem>
        <ContactItem><EmailOutlined style={{marginRight:"10px"}}/>contact@evo.info</ContactItem>
        <Payment src={creditcardlogos}/>
      </Right>
    </Container>
  );
};

export default Footer;
