import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

const Container = styled.div``;
const ProductWrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
  text-align: center;
`;
const Image = styled.img`
  width: 50%;
  height: 50vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: auto 0;
  padding-right: 10vh;
  //background-color : rgba(128,128,128, 0.1);
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 5px;
`;
const FilterColorOption = styled.option`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSizeSelect = styled.select`
  margin-left: 5px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`
  font-size: 16px;
`;

const PurchaseContainer = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-between;
  margin: 30px 0px;
`;
const AmountContainer = styled.div`
  display : flex;
  align-items : center;
  font-weight : 500;
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
`;
const Button = styled.button`
  border : 2px solid gray;
  padding : 10px;
  font-weight : 500;

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
              <Remove style={{cursor: "pointer"}}/>
              <Amount>0</Amount>
              <Add style={{cursor: "pointer"}}/>
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
