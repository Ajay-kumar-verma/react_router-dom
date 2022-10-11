import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';

const Apple=()=>{
    const [id,setId]=useState("");
const params=useParams();

useEffect(()=>{
const {userId}=params;
setId(userId);

},[])


console.log("Apple id is : ",id );
    // console.log("apple page isloaded ")
    return (<>
          Apple id is : {id}.

    </>)

}

export default Apple;