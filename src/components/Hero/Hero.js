import React,{useState,useRef, useEffect} from 'react';
import {
    HeroSection,
    HeroWrapper,
    HeroSlider,
    HeroSlide,
    HeroImage,
    HeroContent,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow
} from './Hero.elements';
import {Link} from 'react-router-dom';
import {Button} from '../';

const Hero = ({slider}) => {
    const [current,setCurrent]=useState(0);
    const length=slider.length;
    const timeout=useRef(null);

    useEffect(()=>{
        const nextSlide=()=>{
            setCurrent((current)=>(current===length-1?0:current+1));
        }
        timeout.current=setTimeout(nextSlide,3000);
        return function(){
           if(timeout.current) {
               clearTimeout(timeout.current);
           }
        }
    },[current,length]);

    const nextSlide=()=>{
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current===length-1?0:current+1);
        // console.log(current);
    };

    const prevSlide=()=>{
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current===0?length-1:current-1);
        // console.log(current);
    };


    if(!Array.isArray(slider)||slider.length<=0){
        return null;
    }


    return ( 
        <HeroSection>
            <HeroWrapper>
                {slider.map((item,index)=>(
                    <HeroSlide key={index}>
                        {index===current&&(
                        <HeroSlider>
                            <HeroImage src={item.image} alt={item.alt} />
                            <HeroContent>
                                <h1>{item.title}</h1>
                                <p>{item.prince}</p>
                                <Button renderas={Link} to={item.path} primary maxWidth160px>
                                    {item.label}
                                    <Arrow/>
                                </Button>
                            </HeroContent>                            
                        </HeroSlider>
                        )}                        
                    </HeroSlide>
                ))}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
     );
}
 
export default Hero;