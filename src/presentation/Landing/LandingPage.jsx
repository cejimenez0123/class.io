import { useState } from "react"


import LoginCard from "./LogInCard"
import LogoCard from "./LogoCard"

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

 <LogoCard/>

       </div>)
}
export default LandingPage