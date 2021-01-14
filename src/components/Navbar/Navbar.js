import React from 'react';
import {menuData} from '../../data/MenuData';
import {
    Nav,
    Logo,
    MenuBars,
    NavMenu,
    NavMenuLinks
} from './Navbar.elements';

const Navbar = () => {
    return ( 
        <Nav>
            <Logo to='/'>NAZWA</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            Navbar
        </Nav>
     );
}
 
export default Navbar;