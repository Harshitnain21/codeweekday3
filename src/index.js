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
import Mydetailspage from './modules/dashboard/Mydetailspage';
import Mygraphpage from './modules/dashboard/Mygraphpage';
import Mypropspage from './modules/dashboard/Mypropspage';
import Myforms from './modules/dashboard/Myforms';
import Mycustomform from './modules/dashboard/Mycustomform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Mylogin/>}></Route>
          <Route path='landing' element={<Mylandingpage/>}>
              <Route path='' element={<Myhome/>}/>
              <Route path='fetch' element={<Myfetch/>}/>
              <Route path='fetch/view/:id' element={<Mydetailspage/>}/>
              <Route path='axios' element={<Myaxios/>}/>
              <Route path='mygraph' element={<Mygraphpage/>}/>
              <Route path='props' element={<Mypropspage/>}/>
              <Route path='myform' element={<Myforms/>}/>
              <Route path='cusform' element={<Mycustomform/>}/>
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
