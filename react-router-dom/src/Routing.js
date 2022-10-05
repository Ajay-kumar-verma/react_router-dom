import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Routing = () => {
  return (
    <div>Routing</div>
  )
}


const Home=()=>{

 console.log("Home page is loaded");

return (<div>

This is home page

</div>)


}


const About=()=>{
  console.log("About page loaded");
  return (<div>
    
    <div>This is about page
</div>
    </div>)
    }
 
const NavBar=()=>{
       console.log("Nav bar loaded ..")

       const styl=({isActive})=>{
       return isActive?{color:'green',fontSize:"40px"}:null;

    }

    return (<>

<nav>
<NavLink to="/Home" style={state=>styl(state)}  >Home </NavLink>
<NavLink to="/About"  style={state=>styl(state)} >About </NavLink>

</nav>
</>)

}

export  {Home,About,Routing,NavBar};