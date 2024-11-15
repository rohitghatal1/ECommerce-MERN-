import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Meat from './components/Meat';
import Bakery from './components/Bakery';
import Beverages from './components/Beverages';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/meat' element = { <Meat/>} />
        <Route path='/bakery' element = { <Bakery/>} />
        <Route path='/beverages' element = { <Beverages/>} />
        <Route path='/contact' element = { <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
