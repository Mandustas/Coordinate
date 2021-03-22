import React, { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import $ from "jquery"
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const heightR = $(window).height() as any;
    $('.App').css("min-height", heightR);
  });

  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>


  );
}

export default App;
