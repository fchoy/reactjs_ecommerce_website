import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {mobile, mobile_425width} from '../responsive'

const Container = styled.div``;
const Wrapper = styled.div`
  ${mobile({display : "flex", flexDirection : "column"})}
  ${mobile_425width({display : "flex", flexDirection : "column"})}
`;
const Title = styled.h1`
  padding: 0px 20px;
  font-weight: 400;
  text-align: center;
  ${mobile({textDecoration : "underline"})}
  ${mobile_425width({textDecoration : "underline"})}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({display : "flex", flexDirection : "column"})}
  ${mobile_425width({display : "flex", flexDirection : "column"})}
`;

const TopTexts = styled.div`
  ${mobile({marginBottom : "7%"})}
  ${mobile_425width({marginBottom : "7%"})}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  text-decoration: underline;
  ${mobile({fontSize : "1.2em"})}
  ${mobile_425width({fontSize : "1.2em"})}

`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({marginBottom : "7%", width : "50vw", height : "10vh", fontSize : "1.1em"})}
  ${mobile_425width({marginBottom : "7%", width : "50vw", height : "10vh", fontSize : "1.1em"})}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({flexDirection : "column"})}
  ${mobile_425width({flexDirection : "column"})}
`;

const ProductInfo = styled.div`
  flex: 3;
  ${mobile({marginBottom : "7%"})}
  ${mobile_425width({marginBottom : "7%"})}
`;

const Product = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

const Image = styled.img`
  width: 30%;
  height: 40%;
  margin-right: 10px;
  padding-top: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const ProductID = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-weight: 400;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const AddButton = styled(Add)`
  &&{
    &:hover{
      opacity : 0.9;
    }
  }
`;

const RemoveButton = styled(Remove)`
  &&{
    &:hover{
      opacity : 0.9;
    }
  }
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 20px;
`;
const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 600;
  padding-top: 10px;
`;

const Hr = styled.hr`
  margin-right: 20px;
  background-color: #e7e5e5;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

const SummaryTitleContainer = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  border-bottom : 1px dotted black;
  padding-top : 2px;
  ${mobile({marginBottom : "3.5%"})}
  ${mobile_425width({marginBottom : "3.5%"})}
`;

const SummaryTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  //text-decoration: underline;
  //text-decoration-thickness: 1px;
`;

const SummaryItem = styled.div`
  font-weight : ${props => props.type === "total" ? 500 : 400};
  font-size : ${props => props.type === "total" ? "28px" : "18px"};
  ${mobile({marginBottom : "3.5%"})}
  ${mobile_425width({marginBottom : "3.5%"})}
`;
const SummaryItemText = styled.span`
`;
const SummaryItemTotal = styled.span`
  margin-left : 20px;
`;

const Button = styled.button`
  background-color: black;
  color : white;
  border : 1px solid black;
  width : 100%;
  height : 10%;
  font-size: 16px;

  &:hover{
    cursor : pointer;
    background-color : rgba(0,0,0, 0.9);
  }

  ${mobile({width : "80vw", height : "10vh"})}
  ${mobile_425width({width : "80vw", height : "10vh"})}
`;

const ShoppingCart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <Title>Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Cart (1)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>

        <Bottom>
          <ProductInfo>
            <Product>
              <ProductDetails>
                <Image src="https://cdn.shopify.com/s/files/1/0330/1705/products/BAELZ_CAP_1000x.png?v=1659116612" />
                <Details>
                  <ProductName>Hakos Baelz Cap</ProductName>
                  <ProductID>#001</ProductID>
                  <ProductColor color="red" />
                  <ProductSize>Large</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <AmountContainer>
                  <RemoveButton />
                  <ProductAmount>1</ProductAmount>
                  <AddButton />
                </AmountContainer>
                <ProductPrice>$35</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr /> {/*HR that divides each product */}
            <Product>
              {" "}
              {/*product 2*/}
              <ProductDetails>
                <Image src="https://cdn.shopify.com/s/files/1/0330/1705/products/ame_hoodie_1.jpg?v=1638483444" />
                <Details>
                  <ProductName>Amelia Watson Hoodie</ProductName>
                  <ProductID>#001</ProductID>
                  <ProductColor color="gold" />
                  <ProductSize>Large</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <AmountContainer>
                  <RemoveButton />
                  <ProductAmount>1</ProductAmount>
                  <AddButton />
                </AmountContainer>
                <ProductPrice>$65</ProductPrice>
              </PriceDetail>
            </Product>
          </ProductInfo>

          <Summary>
            <SummaryTitleContainer>
              <SummaryTitle>Order Summary</SummaryTitle>
            </SummaryTitleContainer>
            <SummaryItem>
              <SummaryItemText>Subtotal :</SummaryItemText>
              <SummaryItemTotal>$100</SummaryItemTotal>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping :</SummaryItemText>
              <SummaryItemTotal>$11.95</SummaryItemTotal>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Taxes :</SummaryItemText>
              <SummaryItemTotal>$9.95</SummaryItemTotal>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total :</SummaryItemText>
              <SummaryItemTotal>$121.90</SummaryItemTotal>
            </SummaryItem>
            <Button>Checkout</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ShoppingCart;
