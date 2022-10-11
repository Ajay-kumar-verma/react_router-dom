import {Routes ,Route} from 'react-router-dom';
import {Home,About,Routing,NavBar} from './Routing';
import {Navigation} from './Navigation';
import {NoMatch} from './NoMatch';

import Product from './Product/Product'

import Apple from './Product/Apple'
import Orange from './Product/Orange'
import Banana from './Product/Banana'


function App() {
  console.log("App js loaded")  
  return (
    <>
  This is app page 
   <NavBar />
  <Routing />
  Pages are :   
  <Routes>


 <Route    path="About" element={<About />} />
   <Route    path="Home" element={<Home />} />
   <Route    path="Product" element={<Product />}  >
     <Route    path="Apple" element={<Apple />} />
     <Route    path="Orange" element={<Orange />} />
     <Route    path="Banana" element={<Banana />} >

      <Route index element={<A/>} />
      {/* Index is used for default rendering  */}

      <Route   path="A" element={<A />}  /> 
      <Route   path="B" element={<B />}  /> 
      <Route   path="C" element={<C />}  />
     </Route>
   </Route>

   <Route  exact  path="*"  element={<NoMatch />} />
  </Routes>
   <Navigation />

    </>
  );

 function A(){
  return "This is A ";
 } 


 function B(){
  return "This is A ";
 } 

 function C(){
  return "This is A ";
 } 



}


export  {App};
