import React from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom'


const Product=()=>{

 const styl=({isActive})=>{
        return isActive?{color:'blue',fontSize:"20px"}:null;
     }
 
return (<>

        <nav>
        <NavLink  to="Apple" style={state=>styl(state)}  >Apple </NavLink>
        <NavLink to="Orange"  style={state=>styl(state)} >Orage </NavLink>
        <NavLink to="Banana"  style={state=>styl(state)} >Banana </NavLink>
        </nav>
        {/* This is used for redering the nested component     */}
        <Outlet />
        </>)
        
}


export default Product;