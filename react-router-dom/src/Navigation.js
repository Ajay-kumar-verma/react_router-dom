import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navigation = () => {
 const navigate=useNavigate();
     return (
    <div>
  <button onClick={()=>{navigate(-1)}} > Go back   </button>
  <button onClick={()=>{navigate(1)}} > Go Next   </button>
  <button onClick={()=>{navigate('Home')}} > Home   </button>
  <button onClick={()=>{navigate("About")}} > About   </button>
  <button onClick={()=>navigate('Home',{replace:true})} > go back page   </button>
    </div>
  )

}

export  {Navigation};