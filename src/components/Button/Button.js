import React from 'react';
import {StyledButton} from './Button.element';

const Button = ({children,...props}) => {
    return ( 
        <StyledButton {...props}>
            {children}
        </StyledButton>
     );
}
 
export default Button;