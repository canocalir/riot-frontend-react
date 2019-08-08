import React from 'react';
import './App.css';
import TopBanner from './components/TopBanner/TopBanner';
import Heading from './components/Heading/Heading';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <TopBanner/>
      <Heading/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
