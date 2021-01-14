import React from 'react';
import {menuData} from '../../data/MenuData';
import {
    Nav,
    Logo,
    MenuBars,
    NavMenu,
    NavMenuLinks,
    NavBtm
} from './Navbar.elements';
import {Button} from '../';
import {Link} from 'react-router-dom';


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
            <NavBtm>
                <Button renderas={Link} to='/contact' primary>
                    {/* renderas /as /compoment */}
                    Contact Us
                </Button>
            </NavBtm>

        </Nav>
     );
}
 
export default Navbar;