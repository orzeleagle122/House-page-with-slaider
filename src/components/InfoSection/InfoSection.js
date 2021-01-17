import React from 'react';
import {
    Section,
    Container,
    ColumnLeft,
    ColumnRight
} from './InfoSection.elements';
import {Button} from '../';
import {Link} from 'react-router-dom';

const InfoSection = ({heading,paragraphOne,paragraphTwo,buttonLabel,image,reverse}) => {
    return ( 
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button renderas={Link} to='/homes' primary>
                        {buttonLabel}
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
     );
}
 
export default InfoSection;