import './App.css';
import React, { PureComponent } from 'react';
import { Routes,Route, useLocation } from 'react-router-dom';
import DetailPost from './components/DetailPost';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { useEffect } from 'react';
import Disclaimer from './components/Disclaimer'
import ContactUs from './components/Contact';
import ShareUs from './components/ShareUs';
import User from './components/User';
import { Analytics } from '@vercel/analytics/react';

function App() {

  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
},[location.pathname,[]])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<MainContent /> } />
        <Route exact path='/DetailPost/:id' element={<DetailPost />} />
        <Route exact path='/AboutUs' element={<AboutUs />}/>
        <Route exact path='/Profile' element={<User />}/>
        <Route exact path='/ShareUs' element={<ShareUs />}/>
        <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route exact path='/Disclaimer' element={<Disclaimer />} />
        <Route exact path='/ContactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
