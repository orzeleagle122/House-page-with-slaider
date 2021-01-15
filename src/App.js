import React from 'react';
import {Navbar,Hero} from './components';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import {SliderDataOne} from './data/SliderData';


function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Navbar/>
      <Hero slider={SliderDataOne}/>
    </Router>
    </>
  );
}

export default App;
