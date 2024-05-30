import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mylogin from './modules/auth/Mylogin';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhome from './modules/dashboard/Myhome';
import Myfetch from './modules/dashboard/Myfetch';
import Myaxios from './modules/dashboard/Myaxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Mylogin/>}></Route>
          <Route path='landing' element={<Mylandingpage/>}>
              <Route path='' element={<Myhome/>}/>
              <Route path='fetch' element={<Myfetch/>}/>
              <Route path='axios' element={<Myaxios/>}/>
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
