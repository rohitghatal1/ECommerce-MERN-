import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
