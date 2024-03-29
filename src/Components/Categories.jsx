import React from 'react'
import styled from "styled-components";
import CategoryItem from './CategoryItem';
import { categories } from '../data.js';
import {mobile, mobile_425width} from '../responsive'

const Container = styled.div`
    display : flex; 
    padding : 20px;
    justify-content: space-between;
    width : fit-content;
    ${mobile({flexDirection: "column"})}
    ${mobile_425width({flexDirection: "column"})}
`;

//Will use CategoryItem component and data.js object data to create the UI for this component.
const Categories = () => {
  return (
    <Container>
        {categories.map(item => (<CategoryItem item={item} key={item.id}/>))}
    </Container>
  );
};

export default Categories