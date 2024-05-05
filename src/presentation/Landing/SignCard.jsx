

import { useContext, useState } from "react"
import LogoCard from "./LogoCard"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Enviroment from "../../core"
import MyContext from "../../context"
function SignCard(props){
    const {setToken}=useContext(MyContext)
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [isEducator,setIsEducator]=useState(false)
    const handleEmail = (e)=>{
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }
    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.currentTarget.value)
    }
    const handleName = (e)=>{
        setName(e.currentTarget.value)
    }
    const handleIsEducator = (e)=>{
        setIsEducator(e.currentTarget.checked)
    }
    const signUp = (e)=>{
            axios.post(`${Enviroment.BASE_URL}/user/register`,
                {   name:name,
                    email:email,
                    educator:isEducator,
                    password:password}).then(res=>{

                        if(res.data && res.data.token){
                            localStorage.setItem('token',res.data.token);
                           setToken(res.data.token)
                            navigate("/auth/topics")
                        }
                
            })}
return(
    <div className="landing">
<div className=" land--card ">
<div className='main'>
<h1 className='heading text-4xl mt-24 mb-12 text-base-100 font-bold '>Welcome Back!</h1>




<div class="w-full max-w">
<form class=" form-control px-8 pt-2 pb-8 my-auto">
<div class="mb-4">
  <label class="block font-medium text-gray-700  mb-3" for="username">
    Full Name
  </label>
  <input 
   value={name}
   onChange={(e)=>handleName(e)}
   className=" border login--input w-full rounded  py-2 px-4"
   id="name" type="text" placeholder="Enter Full Name"/>
</div>
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
  <label className="block font-medium  text-gray-700  mb-3" for="password">
    Create Password
  </label>
  <input 
   value={password}
   onChange={(e)=>handlePassword(e)}
   className=" border w-full login--input  rounded py-2 px-4  " id="password" type="password" placeholder="Enter Password"/>
</div>
<div class="mb-4">
  <label class="block font-medium text-gray-700  mb-3" for="confirmPassword">
    Enter Password Again
  </label>
  <input 
  type="password"
   value={confirmPassword}
   onChange={(e)=>handleConfirmPassword(e)}
   className=" border login--input w-full rounded  py-2 px-4"
   id="confirmPassword" placeholder="Confirm Password"/>
</div>

  <label className="label cursor-pointer">
    <span className="label-text text-xl text-base-100">Are you an Educator?</span> 
    <input onChange={(e)=>handleIsEducator(e)}type="checkbox"  className="checkbox checkbox-lg checkbox-base-100" />
  </label>
<div class="flex flex-col items-center justify-between">
  <button onClick={signUp}className="bg-black w-64 mb-4 mx-auto hover:bg-grey-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Create Account
  </button>

</div>
</form>
</div>
</div>
</div>
<LogoCard/>
</div>)
}
export default SignCard