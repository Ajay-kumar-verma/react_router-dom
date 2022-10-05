import {Routes ,Route} from 'react-router-dom';
import {Home,About,Routing,NavBar} from './Routing';
import {Navigation} from './Navigation';
import {NoMatch} from './NoMatch';
function App() {
  console.log("App js loaded")  
  return (
    <>
  This is app page 
   <NavBar />
  <Routing />
  <Routes>
   <Route exact  path="/About" element={<About />} />
   <Route exact  path="/Home" element={<Home />} />
   <Route  path="*"  element={<NoMatch />} />
  </Routes>
   <Navigation />

    </>
  );
}


export  {App};
