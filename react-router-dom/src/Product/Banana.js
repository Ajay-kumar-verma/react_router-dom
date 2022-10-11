import React from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom'


const Banana=()=>{


    const styl=({isActive})=>{
        return isActive?{color:'yellow',fontSize:"24px"}:null;
     }
 


return (<>
        <nav>
        <NavLink  to="A" style={state=>styl(state)} >A </NavLink>
        <NavLink to="B"  style={state=>styl(state)} >B </NavLink>
        <NavLink to="C"  style={state=>styl(state)} >C </NavLink>
        </nav>
        <Outlet />
    </>)
}

export default Banana;