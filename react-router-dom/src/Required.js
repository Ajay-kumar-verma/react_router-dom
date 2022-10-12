import { useNavigate ,Navigate} from "react-router-dom";
import React ,{useContext} from 'react'
import context from './Context';

const Required = ({children}) => {

  const data=useContext(context);

  if(!data.user){
     return <Navigate to="/" />
  }
   else return  children ;

}

export default Required