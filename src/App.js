import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPost from './components/DetailPost';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage /> } />
        <Route path='/DetailPost' element={<DetailPost />} />
        <Route path='/AboutUs' element={<AboutUs />}/>
      </Routes>
    </div>
  );
}

export default App;
