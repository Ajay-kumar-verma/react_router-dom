import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import {App} from './App';
import Auth from './Auth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {
  console.log("Index js loaded")
}

  <BrowserRouter> 
  <Auth>
   
     <App /> 
   
  </Auth>
  
  </BrowserRouter>


</>
  );
