import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import {mobile} from '../responsive'
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   height : 100px;
   ${mobile({height: "50px"})};
`;

const Wrapper = styled.div`
  padding : 10px 20px;
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  align-items: center;
  height : 75px;
  ${mobile({padding: "10px 0px"})};

`;
const LeftPortion = styled.div`
  display : flex;
  align-items : center;
  flex : 1; /*Div grows & shrinks in proportion as window-size and div will take up screen as per screen size available for (3 divs means 33% width for this div) */
  /*Essentially takes up "1" unit out of all of the div size available. (If other elements also have flex : 1, then they will all be equal widths) */
`;

const SearchContainer = styled.div`
  display : flex;
  align-items : center;
  margin-left : 15px;
  padding : 5px;
  border : 1px solid gray;
  width : 250px;
  ${mobile({width: "100px"})}
`;

const Input = styled.input`
  border : none;
  width : 230px;
  ${mobile({width: "70px"})}
`;

const Logo = styled.h1`
  font-weight : bold;
  text-align : center;
  ${mobile({fontSize: "18px", display: "flex", marginLeft: "20px", justifyContent: "center"})}
`;

const Language = styled.span`
  font-size : 14;
  cursor : pointer; 
  margin : 0 10px; 
  ${mobile({display : "none"})}
`;

const CenterPortion = styled.div`
  flex : 1;
`;
const RightPortion = styled.div`
  flex : 1;
  display : flex;
  justify-content: flex-end; /*Flex end places the items within the container to the right side of the container. */
  ${mobile({justifyContent: "center", flex: 2})}
  align-items : center;
`;

const MenuDiv = styled.div`
  width : 400px;
  margin-right : 10px;
  display : flex;
  justify-content: flex-end;
  ${mobile({justifyContent: "flex-start", marginLeft: "20px", alignItems: "center"})}
`

const MenuItem = styled.div`
  font-size : 14px;
  cursor : pointer; /*Cursor is pointer when hovered over the Menu Items Components.*/
  margin-right : 100px;
  width : fit-content;
  ${mobile({marginRight: "10px"})}

`;


const Navbar = () => {
  return(
    <Container>
      <Wrapper>
        <LeftPortion>
          <Language>EN</Language>
          <SearchContainer>
              <Input placeholder='Search'/>
              <Search style={{color : "gray", fontSize : 16, marginLeft : 5}}/>  {/*Using inline styles to change the styling of search icon */}
          </SearchContainer>
        </LeftPortion>
        <CenterPortion><Logo>EVO</Logo></CenterPortion>
        <RightPortion>
          <MenuDiv>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <Badge badgeContent={1} color="primary">{/*React badge Component used to show number of items on cart.*/}
              <ShoppingCartCheckoutOutlined/>  {/*Material UI Badge Icon*/}
            </Badge> 
          </MenuDiv>
        </RightPortion>
      </Wrapper>
    </Container>
  )
};

export default Navbar;