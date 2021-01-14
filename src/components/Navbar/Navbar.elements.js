import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';


export const Nav=styled.nav`
    height: 60px;
    background: #000;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink=css`
    color: #fff;
    display:flex;
    align-items:center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

export const Logo=styled(Link)`
    ${NavLink}
    font-style: italic;
`;

export const MenuBars=styled.i`

`;

export const NavMenu=styled.div`
    display: flex;
    align-items: center;
`;

export const NavMenuLinks=styled(Link)`
    ${NavLink}
`;