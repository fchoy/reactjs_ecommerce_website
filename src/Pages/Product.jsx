import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import {mobile, mobile_425width} from '../responsive';

const Container = styled.div`
  width : 100vw;
`;
const ProductWrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({flexDirection : "column"})}
  ${mobile_425width({flexDirection : "column"})}
`;
const ImgContainer = styled.div`
  flex: 1;
  text-align: center;
`;
const Image = styled.img`
  width: 50%;
  height: 50vh;
  ${mobile({width : "100%", maxHeight : "100%", verticalAlign : "middle"})}
  ${mobile_425width({width : "100%", maxHeight : "100%", verticalAlign : "middle"})}
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: auto 0;
  padding-right: 10vh;
  //background-color : rgba(128,128,128, 0.1);
  ${mobile({width : "100%", display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"})}
  ${mobile_425width({width : "100%", display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"})}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({width : "100%", textAlign : "center"})}
  ${mobile_425width({width : "100%", textAlign : "center"})}
`;
const Description = styled.p`
  margin: 20px 0px;
  ${mobile({width : "100%", textAlign : "center"})}
  ${mobile_425width({width : "100%", textAlign : "center"})}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({width : "100%", textAlign : "center"})}
  ${mobile_425width({width : "100%", textAlign : "center"})}
`;

const FilterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({display : "flex", flexDirection : "column", width : "100%", alignItems : "center"})}
  ${mobile_425width({display : "flex", flexDirection : "column", width : "100%", alignItems : "center"})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({flexDirection : "column", width : "fit-content", height : "fit-content", marginBottom : "5%"})}
  ${mobile_425width({flexDirection : "column", width : "fit-content", height : "fit-content", marginBottom : "5%"})}
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 5px;
  ${mobile({fontSize : "2em"})}
  ${mobile_425width({fontSize : "2em"})}
`
const FilterColorOption = styled.option`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  ${mobile({width : "80vw", height : "10vh", marginBottom : "5%"})}
  ${mobile_425width({width : "80vw", height : "10vh", marginBottom : "5%"})}
`;
const FilterSizeSelect = styled.select`
  margin-left: 5px;
  padding: 5px;
  ${mobile({width : "80vw", height : "10vh", fontSize: "1.5em"})}
  ${mobile_425width({width : "80vw", height : "10vh", fontSize: "1.5em"})}
`;
const FilterSizeOption = styled.option`
  font-size: 16px;
  ${mobile({fontSize: "1.5em"})}
  ${mobile_425width({fontSize: "1.5em"})}
`;

const PurchaseContainer = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-between;
  margin: 30px 0px;
  ${mobile({flexDirection : "column", alignItems : "center", width : "fit-content"})}
  ${mobile_425width({flexDirection : "column",  alignItems : "center", width : "fit-content"})}
`;
const AmountContainer = styled.div`
  display : flex;
  align-items : center;
  font-weight : 500;
  ${mobile({marginBottom : "15%"})}
  ${mobile_425width({marginBottom : "15%"})}
`;
const Amount = styled.span`
  width : 50px;
  height : 30px;
  border-radius : 10px;
  border : 1px solid black;
  display : flex;
  align-items: center;
  justify-content: center;
  margin : 0px 20px;
  ${mobile({width : "40vw", height : "10vh"})}
  ${mobile_425width({width : "40vw", height : "10vh"})}
`;
const Button = styled.button`
  border : 2px solid gray;
  padding : 10px;
  font-weight : 500;

  ${mobile({width : "70vw", height : "15vh", textAlign : "center"})}
  ${mobile_425width({width : "70vw", height : "15vh", textAlign : "center"})}

  &:hover{
    background-color: rgba(128,128,128, 0.2);
    cursor: pointer;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <ProductWrapper>
        <ImgContainer>
          <Image src="https://essentialshoodie.store/wp-content/uploads/2022/01/Fear-Of-God-Essentials-Hoodie.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Fear Of God Essentials Hoodie</Title>
          <Description>Authentic Fear of God Essentials Hoodie.</Description>
          <Price>$150</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColorOption color="Black" />
              <FilterColorOption color="Grey" />
              <FilterColorOption color="Red" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSizeSelect>
                <FilterSizeOption>Extra Small</FilterSizeOption>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Medium</FilterSizeOption>
                <FilterSizeOption>Large</FilterSizeOption>
                <FilterSizeOption>Extra Large</FilterSizeOption>
              </FilterSizeSelect>
            </Filter>
          </FilterContainer>

          <PurchaseContainer>
            <AmountContainer>
              <Remove style={{cursor: "pointer", width : "15vw", height : "10vh", textAlign : "center"}}/>
              <Amount>0</Amount>
              <Add style={{cursor: "pointer", width : "15vw", height : "10vh", textAlign : "center"}}/>
            </AmountContainer>
            <Button>Add To Cart</Button>
          </PurchaseContainer>
        </InfoContainer>
      </ProductWrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
