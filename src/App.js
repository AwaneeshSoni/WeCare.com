import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import DetailPost from './components/DetailPost';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer'
import ContactUs from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<MainContent /> } />
        <Route exact path='/DetailPost' element={<DetailPost />} />
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
