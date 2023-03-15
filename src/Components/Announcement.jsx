import styled from "styled-components";
import React from 'react';
import {mobile, mobile_425width} from '../responsive'

const Container = styled.div`
    height : 40px;
    background-color: teal;
    color : white;
    display : flex;
    justify-content: center;
    align-items : center;
    font-size : 14px;
    width : 100%;
    ${mobile({width : "100vw"})}
    ${mobile_425width({width: "100vw"})}
`;

const Announcement = () => {
  return (
    <Container>
        30% off all clothes!
    </Container>
  )
}

export default Announcement