import './App.css';
import React, { Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import DetailPost from './components/DetailPost';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer'
import ContactUs from './components/Contact';
import { useEffect } from 'react';
function App() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },[])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<MainContent /> } />
        <Route exact path='/DetailPost/:id' element={<DetailPost />} />
        <Route exact path='/AboutUs' element={<AboutUs />}/>
        <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route exact path='/Disclaimer' element={<Disclaimer />} />
        <Route exact path='/ContactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
