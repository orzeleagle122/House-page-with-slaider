import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledButton=styled(Link)`
    background: ${({primary})=>(primary?'#000d1a':'#cd854f')};
`;