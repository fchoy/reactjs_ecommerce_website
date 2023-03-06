import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";

//second page

const Container = styled.div`
  margin : 0;
  padding : 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin : 20px;
`;  

const Filter = styled.div`
  margin : 0px 20px;
`;

const FilterText = styled.span`
  font-size : 20px;
  font-weight : 600;
`;

const FilterSelect = styled.select`
  margin-left : 10px;
  padding : 5px 5px;
`;

const Option = styled.option`
  font-size : 16px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Products</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products By :</FilterText>
          <FilterSelect>
            <Option disabled selected hidden>Color</Option> {/**Default Text that is shown on first visit to page, it is disabled, auto selected, and hidden from the menu of options*/}
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </FilterSelect>
          <FilterSelect>
            <Option disabled selected hidden>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </FilterSelect>
        </Filter>
        <Filter>
          <FilterText>Sort Products By :</FilterText>
          <FilterSelect>
            <Option>Newest</Option>
            <Option>Oldest</Option>
            <Option>Price {"("}${")"}</Option>
            <Option>Price {"("}$$${")"}</Option>
          </FilterSelect>
        </Filter>

      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
