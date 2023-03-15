import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {mobile, mobile_425width} from '../responsive'

const Info = styled.div`
  opacity : 0; //no icons on start
  width: 100%;
  height: 100%;
  position: absolute;
  top : 0;
  left : 0;
  background-color : rgba(0,0,0, 0.2);
  z-index: 3;
  display : flex;
  justify-content: center;
  align-items: center;
  transition : all 0.5s ease; 
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position : relative;
  //only affects Info component on when hovering over Container div (styled components)
  &:hover ${Info}{
    opacity : 1;
  }

  ${mobile({width : "fit-content", margin : "3% auto"})};
  ${mobile_425width({width : "fit-content",  margin : "3% auto"})};
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: white;
  position: absolute;
  ${mobile({height: "100px", width : "100px"})};
  ${mobile_425width({height: "100px", width : "100px"})};
`;

const Image = styled.img`
  height: ${props => props.height === "" ? "25vh" : props.height};
  width: 80%;
  z-index: 2;
  mix-blend-mode: multiply;
  background-color: white;
  ${mobile({objectFit: "fill", height: "40vh", width : "80vw"})};
  ${mobile_425width({objectFit: "fill", height: "40vh", width : "80vw"})};
`;

const Icon = styled.div`
  width : 40px;
  height : 40px;
  border-radius : 50%;
  display : flex; 
  justify-content: center;
  align-items: center;
  background-color : white;
  margin : 5px;  
  transition : all 0.5s ease; //for all transitions 
  z-index : 3;

  &:hover{ //on icon hover
    background-color : #e9f5f5; //change bg color
    transform: scale(1.1); //enlarge by 1.1 on x and y axis
    cursor : pointer;
  }

  ${mobile({width: "15%", height : "20%"})};
  ${mobile_425width({width: "15%", height : "20%"})};
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} height={item.height}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
