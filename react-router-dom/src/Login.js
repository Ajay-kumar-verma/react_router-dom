import React ,{useContext} from 'react'
import context from './Context';


const Login = () => {
    const data=useContext(context);

 
    return (

  <>
   
   <button onClick={()=>{data.login("Ajay")}} >login </button>
   
  </>

    )
}

export default Login;