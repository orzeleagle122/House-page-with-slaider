import React,{useState} from 'react';
import {Navbar,Hero,DropDownMenu,InfoSection} from './components';
import {HashRouter as Router} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import {SliderDataOne} from './data/SliderData';
import {InfoSectionDataOne,InfoSectionDataTwo} from './data/InfoSectionData';


function App() {
  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    <GlobalStyle/>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar toggle={toggle}/>
      <DropDownMenu isOpen={isOpen} toggle={toggle}/>
      <Hero slider={SliderDataOne}/>
      <InfoSection {...InfoSectionDataOne}/>
      <InfoSection {...InfoSectionDataTwo}/>
    </Router>
    </>
  );
}

export default App;
