import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import {mobile, mobile_425width} from '../responsive'

const Container = styled.div`
  padding: 20px;
  display : flex;
  ${mobile({flexDirection: "column", padding : "5%"})}
  ${mobile_425width({flexDirection: "column", padding : "5%"})}

`

const Products = () => {
  return (
    <Container>{popularProducts.map((item) => (<Product item={item} key={item.id}/>))}</Container>
  )
}

export default Products