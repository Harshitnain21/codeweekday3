import React, { lazy,Suspense } from 'react';
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
import Myconditional from './modules/dashboard/Myconditional';
// import Mylazyloading from './modules/dashboard/Mylazyloading';

const Mylazyloading = lazy(()=> import('./modules/dashboard/Mylazyloading'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Mylogin/>}></Route>
          <Route path='landing' element={<Mylandingpage/>}>
              <Route path='' element={<Myhome/>}/>
              <Route path='fetch' element={<Myfetch/>}/>
              <Route path='conditional' element={<Myconditional/>}/>
              <Route path='fetch/view/:id' element={<Mydetailspage/>}/>
              <Route path='axios' element={<Myaxios/>}/>
              <Route path='mygraph' element={<Mygraphpage/>}/>
              <Route path='props' element={<Mypropspage/>}/>
              <Route path='myform' element={<Myforms/>}/>
              <Route path='cusform' element={<Mycustomform/>}/>
              <Route path='lazy' element={<Suspense fallback={<h1 style={{color:'green',backgroundColor:'red',padding:'50px'}}>loading page...</h1>}>
                  <Mylazyloading/>
              </Suspense>}/>
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
