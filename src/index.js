import React from 'react';
import ReactDOM from 'react-dom/client';
import Xyz from './About';
import { About1 } from './About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Xyz></Xyz>
 <About1></About1>

  </React.StrictMode>
);
