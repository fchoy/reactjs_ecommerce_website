import styled from "styled-components";
import React from 'react';

const Container = styled.div`
    height : 40px;
    background-color: teal;
    color : white;
    display : flex;
    justify-content: center;
    align-items : center;
    font-size : 14px;
`;

const Announcement = () => {
  return (
    <Container>
        30% off all clothes!
    </Container>
  )
}

export default Announcement