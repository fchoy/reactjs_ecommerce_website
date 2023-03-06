import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive'

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
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: white;
  position: absolute;
  ${mobile({height: "100px", width : "100px"})};
`;
const Image = styled.img`
  height: 50%;
  width: 55%;
  z-index: 2;
  mix-blend-mode: multiply;
  background-color: white;
  ${mobile({objectFit: "cover"})};
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

  &:hover{ //on icon hover
    background-color : #e9f5f5; //change bg color
    transform: scale(1.1); //enlarge by 1.1 on x and y axis
    cursor : pointer;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
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
