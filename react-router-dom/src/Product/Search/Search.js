import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchedData,search]=useSearchParams();
const data=searchedData.get('mobile')==9999
 const i=searchedData.entries();

 for(let item of i){
    const [key,val]=item;
    console.log(key,val);
 }
   
console.log("Searched data is : " ,);


  return (
    <div>
   THIS IS SEARCHING PART  
    
    <button onClick={()=>{search({mobile:"9483948",name:"Ajay kumar verma"})}} > Search </button>
    <button onClick={()=>{search({})}} > Reset </button>
  {data?"Found":"Not Found"}

    </div>
  )
}

export default Search