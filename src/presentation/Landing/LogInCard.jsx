
import { useState } from "react"
import Enviroment from "../../core"
import { useNavigate} from "react-router-dom"
import LogoCard from "./LogoCard"
function LoginCard(props){
    const navigate = useNavigate()
    const navigateToSignUp = ()=>{
        navigate("/register")
    }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleEmail = (e)=>{
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }
    
return(
<div className=" login--card">
<div className='main'>
<h1 className='heading text-xl mb-12'>Welcome Back!</h1>




<div class="w-full max-w">
<form class=" px-8 pt-6 pb-8 my-auto">
<div class="mb-4">
  <label class="block font-medium text-gray-700  mb-3" for="username">
    Enter Email
  </label>
  <input 
   value={email}
   onChange={(e)=>handleEmail(e)}
   className=" border login--input w-full rounded  py-2 px-4"
   id="username" type="text" placeholder="Enter Email"/>
</div>
<div className="mb-10">
  <label className="block font-medium  text-gray-700  mb-4" for="password">
    Enter Password
  </label>
  <input 
   value={password}
   onChange={(e)=>handlePassword(e)}
   className=" border w-full login--input  rounded py-2 px-4  " id="password" type="password" placeholder="Enter Password"/>
</div>
<div class="flex flex-col items-center justify-between">
  <button className="bg-black w-64 mb-4 mx-auto hover:bg-grey-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Log In
  </button>
  <button onClick={navigateToSignUp}className="bg-black w-64 mb-4 mx-auto hover:bg-grey-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Create Account
  </button>
  <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
    Forgot Password?
  </a>
</div>
</form>
</div>
</div>
<LogoCard/>
</div>)
}

export default LoginCard