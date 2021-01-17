import React from 'react';
import {
    DropDownMenuContainer,
    Icon,
    CloseIcon,
    DropDownWrapper,
    DropDownItems,
    DropDownLink,
    BtnWrap
} from './DropDownMenu.elements';
import {menuData} from '../../data/MenuData';
import {Link} from 'react-router-dom';
import {Button} from '../';

const DropDownMenu = ({isOpen,toggle}) => {
    return ( 
        <DropDownMenuContainer isOpen={isOpen} onOpen={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropDownWrapper>
                <DropDownItems>
                    {menuData.map((item,index)=>(
                        <DropDownLink 
                            renderas={Link}
                            to={item.link}
                            key={index}>
                                {item.title}
                            </DropDownLink>
                    ))}
                </DropDownItems>
                <BtnWrap>
                    <Button primary round big to='/contact'>
                        Contact us
                    </Button>
                </BtnWrap>
            </DropDownWrapper>
        </DropDownMenuContainer>
     );
}
 
export default DropDownMenu;