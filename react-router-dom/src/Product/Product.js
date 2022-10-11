import React from 'react'
import {Link,NavLink,Outlet} from 'react-router-dom'


const Product=()=>{

 const styl=({isActive})=>{
        return isActive?{color:'blue',fontSize:"20px"}:null;
     }
 const id="345";
 
return (<>

        <nav>
        <NavLink  to={`Apple/${id}`} style={state=>styl(state)}  >Apple </NavLink>
        <NavLink to="Orange"  style={state=>styl(state)} >Orage </NavLink>
        <NavLink to="Banana"  style={state=>styl(state)} >Banana </NavLink>
       {/* this is relative link  */}
        <NavLink to="/Search"  style={state=>styl(state)} >Search </NavLink>
      
        </nav>
        {/* This is used for redering the nested component     */}
        <Outlet />
        </>)
        
}


export default Product;