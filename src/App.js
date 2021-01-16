import React,{useState} from 'react';
import {Navbar,Hero,DropDownMenu} from './components';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import {SliderDataOne} from './data/SliderData';


function App() {
  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    <GlobalStyle/>
    <Router>
      <Navbar toggle={toggle}/>
      <DropDownMenu isOpen={isOpen} toggle={toggle}/>
      <Hero slider={SliderDataOne}/>
    </Router>
    </>
  );
}

export default App;
