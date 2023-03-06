//will be used to create responsive design using styled components and media queries
import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width : 380px){
            ${props}; //will use props values that is passed in in order to set styling for screens that have a width of 380px and under
        }
    `;
};