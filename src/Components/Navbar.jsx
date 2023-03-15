import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import {mobile, mobile_425width} from '../responsive'
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   height : 100px;
   ${mobile({height: "fit-content", width : "100vw"})};
   ${mobile_425width({height: "fit-content", width : "100vw"})};
`;

const Wrapper = styled.div`
  padding : 10px 20px;
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  align-items: center;
  height : 75px;
  ${mobile({padding: "5% 5%", flexDirection : "column", height : "fit-content"})};
  ${mobile_425width({padding: "5% 5%", flexDirection : "column", height : "fit-content"})};
`;
const LeftPortion = styled.div`
  display : flex;
  align-items : center;
  flex : 1; /*Div grows & shrinks in proportion as window-size and div will take up screen as per screen size available for (3 divs means 33% width for this div) */
  /*Essentially takes up "1" unit out of all of the div size available. (If other elements also have flex : 1, then they will all be equal widths) */
  ${mobile({justifyContent: "center", order : "2", marginBottom : "5%"})}
  ${mobile_425width({justifyContent: "center", order : "2", marginBottom : "5%"})}
`;

const Language = styled.span`
  font-size : 14;
  cursor : pointer; 
  margin : 0 10px; 
  ${mobile({})}
  ${mobile_425width({})}
`;

const SearchContainer = styled.div`
  display : flex;
  align-items : center;
  margin-left : 15px;
  padding : 5px;
  border : 1px solid gray;
  width : 250px;
  ${mobile({width: "fit-content", marginLeft : "0px", marginBottom : "5%", justifyContent : "center", alignItems : "center"})}
  ${mobile_425width({width: "fit-content", marginLeft : "0px", marginBottom : "5%", justifyContent : "center", alignItems : "center"})}

`;

const Input = styled.input`
  border : none;
  width : 230px;
  ${mobile({width: "50vw", height : "5vh"})}
  ${mobile_425width({width: "50vw", height : "5vh"})}

`;

const Logo = styled.h1`
  font-weight : bold;
  text-align : center;
  ${mobile({fontSize: "1.7em", display: "flex", marginBottom : "5%", justifyContent: "center"})}
  ${mobile_425width({fontSize: "1.7em", display: "flex", marginBottom : "5%", justifyContent: "center"})}
`;

const CenterPortion = styled.div`
  flex : 1;
  ${mobile({justifyContent: "center", width : "fit-content", flex : "none", order : "1", marginBottom : "5%"})}
  ${mobile_425width({justifyContent: "center", width : "fit-content", flex : "none", order: "1", marginBottom : "5%"})}
`;
const RightPortion = styled.div`
  flex : 1;
  display : flex;
  justify-content: flex-end; /*Flex end places the items within the container to the right side of the container. */
  align-items : center;
  ${mobile({width : "fit-content", order : "3", justifyContent : "center", height : "fit-content" })}
  ${mobile_425width({width : "fit-content", order : "3", justifyContent : "center", height : "fit-content"})}
`;

const MenuDiv = styled.div`
  width : 400px;
  margin-right : 10px;
  display : flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flexDirection : "column" , width : "fit-content", justifyContent : "center"})}
  ${mobile_425width({flexDirection : "column" , width : "fit-content", justifyContent : "center"})}

`;

const MenuItem = styled.div`
  font-size : 14px;
  cursor : pointer; /*Cursor is pointer when hovered over the Menu Items Components.*/
  margin-right : 100px;
  width : fit-content;
  ${mobile({marginRight : "0", marginBottom : "20%", fontSize : "2em"})}
  ${mobile_425width({marginRight : "0", marginBottom : "20%", fontSize : "2em"})}

`;

const ShoppingCartBadge = styled(Badge)`
  &&{
    ${mobile({width : "50%", height : "fit-content"})}
    ${mobile_425width({width : "50%", height : "fit-content"})}
  }
`;

const ShoppingCartOutlinedIcon = styled(ShoppingCartCheckoutOutlined)`
  &&{
    ${mobile({width : "100%", height : "3rem"})}
    ${mobile_425width({width : "100%", height : "3rem"})}
  }
`;


const Navbar = () => {
  return(
    <Container>
      <Wrapper>
        <LeftPortion>
          <Language>EN</Language>
          <SearchContainer>
              <Input placeholder='Search'/>
              <Search style={{color : "gray", fontSize : 16, marginLeft : "5px"}}/>  {/*Using inline styles to change the styling of search icon */}
          </SearchContainer>
        </LeftPortion>
        <CenterPortion><Logo>EVO</Logo></CenterPortion>
        <RightPortion>
          <MenuDiv>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <ShoppingCartBadge badgeContent={1} color="primary">{/*React badge Component used to show number of items on cart.*/}
              <ShoppingCartOutlinedIcon/>  {/*Material UI Shopping Cart Icon*/}
            </ShoppingCartBadge> 
          </MenuDiv>
        </RightPortion>
      </Wrapper>
    </Container>
  )
};

export default Navbar;