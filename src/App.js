import React from 'react';
import {Navbar} from './components';
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Navbar/>
    </Router>
    </>
  );
}

export default App;
