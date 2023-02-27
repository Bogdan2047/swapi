import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AxiosState } from './axios/axiosState';
import { Header } from './context/header';
import { Info } from './context/info';
import { About } from './pages/about';
import { Home } from './pages/home';

function App() {


  return (
    <AxiosState>
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/info/:id"} element={<Info/>} />

        </Routes>
      </div>
      </BrowserRouter>
    </AxiosState>
  );
}

export default App;
