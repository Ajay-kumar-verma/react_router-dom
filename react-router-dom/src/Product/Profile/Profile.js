import React ,{useContext} from 'react'
import context from '../../Context';

const Profile = () => {

 const data=useContext(context);

  return (
    <>
        
     user is :{data.user}
   
    <button onClick={()=>{data.logout(null)}} >Logout </button>
    </>
  )
}

export default Profile