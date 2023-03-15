import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import {sliderItems} from "../data"; //import our "slideItems" object from our data.js file
import {mobile, mobile_425width} from '../responsive'

const Container = styled.div`
    width: 100%;
    height : 100vh;
    display : flex;
    overflow: hidden; //prevent overflow vertically and horizontally
    ${mobile({marginTop: "50px", display : "none"})}
    ${mobile_425width({marginTop: "50px", display : "none"})}
`;

const Arrow = styled.div`
    width : 50px;
    height : 50px;
    position : absolute; 
    top : 0;
    bottom : 0; /*Top 0 and bot 0 to put container at top left of container */
    background-color : white;
    border-radius: 50%;
    display : flex;
    align-items : center;
    justify-content: center;
   margin : auto; //Used to center item in container Vertically
    left : ${props => props.direction === "left" && "10px"}; //If the prop value "direction" is "left", then assign the CSS value of "left" to be 10px.(element is moved 10px from the left)
    right : ${props => props.direction === "right" && "10px"}; //move element 10px from the right (horizontally).
    cursor : pointer;
    opacity : 0.5;
    z-index: 2;
    `;

const Wrapper = styled.div` //wrapper for image, info, and buttons inside.
    height : 100%;
    display : flex;
    align-items : center;
    justify-content: center;
    transform: translateX(${(props) => props.slideIndex * -100}vw); //used to translate items inside of the wrapped by a certain amount of view width, we will use our slideIndex prop * -100 to determine the transformation
    transition : all 1s ease; //will take 1.5 seconds to complete the transform.
`;

const Slide = styled.div` //container for our slide.
    display : flex; 
    align-items : center;
    height: 100vh; //takes up 100% of the view height of the screen
    width : 100vw; //takes up 100% of the view width 
    background-color: #${props => props.bg}; //assignes the value "#" and the prop value after it.
`;

const ImageContainer = styled.div` //container for image in slider
    height : 100%;
    flex : 1;
`;

const Image = styled.img` //container for our image
    height : 80%;
`;

const InfoContainer = styled.div`
    flex : 1;
    padding : 50px;
`;

/*Styling for our text inside of InfoContainer */
const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0; //top bottom margin 50px, left right margin 0px
    font-size: 30px;
    font-weight : 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding : 10px;
    font-size : 20px;
    border-radius: 10%;
    background-color: transparent;
    cursor : pointer;
`;

/*Used to create slider for image slideshow*/
const Slider = () => {
        //create new state variable named "slideIndex", and a setSlideIndex function that the hook useState() will use to update the state variable. 
        //useState() is a hook, which is a function that "hooks" onto react state and lifecycle features in a react component. It can take in a value that initializes the state variable to that value.
        //(in this case, slideIndex is initialied to 0).
        //useState() returns a pair of values : the current state and the function used to modify the state. (similar to this.state.count and this.setState)
        //this syntax replaces the "state" property of a react class component. 
        const [slideIndex, setSlideIndex] = useState(0); 

        //handle click function handles the onclick event of each arrow with a direction argument passed in from the call.
        const handleClick = (direction) => {
            if(direction === "left"){ //if the arrow's direction property is "left"
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); //set the slideIndex state variable to : if the slideIndex > 0 (not first item), set slideIndex to slideIndex-1, else set it to the last item (Wrap around).
            }
            else{ //if we click the right arrow
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0); //if slideIndex < 2? Then we can go to next slide. Else, go back to first slide (value 0);
            }
        };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}> {/*Container for left and right arrows for slider, contains the prop value "direction" with the value "left" and a onclick handle event that will execute the function "handleClick" with an argument passed in.*/}
            <ArrowLeftOutlined/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}> {/*Contains the slides, we are using a state that keeps track of an object (slideIndex) and use it to translate the container to make it similar to a slide show*/}
            {sliderItems.map((item) => ( //we will map each slider item from the data.js array to allow us to use the attributes of each object in the array 
                //for each iteration, we return several components that have prop attributes set to certain values from object item's attributes. 
                <Slide bgColor={item.bg} key={item.id}> 
                <ImageContainer>
                    <Image src={item.img} key={item.id}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.decription}</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>))}
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider