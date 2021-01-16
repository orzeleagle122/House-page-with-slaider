import React, { useState } from 'react';
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


const Navbar = ({toggle}) => {
    const [navbar,setNavbar]=useState(false);

    const handleChangeBackground=()=>{
        if(window.scrollY>=80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',handleChangeBackground);

    return ( 
        <Nav bg={navbar}>
            <Logo to='/'>HOUSE-LOGO</Logo>
            <MenuBars onClick={toggle}/>
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