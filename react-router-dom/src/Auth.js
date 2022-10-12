import { useState ,useEffect,createContext } from "react";

import { useNavigate } from "react-router-dom";

import  context from   './Context';

const Auth = (props) => {
    const Navigate=useNavigate();

const [user,setUser] =useState("Ajay");

const login=(user)=>{ setUser(user)};

const logout = ()=>{
     setUser(null);
 Navigate("/login")
}

return (

<context.Provider value={{user,login,logout}} >
 {props.children}
</context.Provider>

)

}

export default Auth;