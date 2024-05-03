import { useState } from "react"

import axios from "axios"
import Enviroment from "../../core"
import SignCard from "./SignCard"
import LoginCard from "./LogInCard"

function LandingPage(props){
  const [page,setPage]=useState(0)

  const nextPage = ()=>{
    setPage(prevState=>{
      const newPage = prevState+1
      if(newPage<2){
        return newPage
      }else{
        return prevState
      }

    })
  }

    return(      <div className='landing '>
<div className="land--card">

  <LoginCard/>

</div>

 
   <div className=" logo--card">
     <div className='logo'>
      
       <img/>
     </div>
     03
   </div>
       </div>)
}
export default LandingPage