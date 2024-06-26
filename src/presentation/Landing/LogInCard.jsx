
import { useState } from "react"
import Enviroment from "../../core"
import { useNavigate} from "react-router-dom"
import axios from "axios"
function LoginCard(props){
    const navigate = useNavigate()
    const navigateToSignUp = ()=>{
        navigate("/register")
    }
    const [error,setError]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleEmail = (e)=>{
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.currentTarget.value)
    }
const login = ()=>{
    axios.post(`${Enviroment.BASE_URL}/user/login`,{email,password}).then(res=>{
        if(res.data && res.data.token){
            const {token} = res.data
            localStorage.setItem("token",token)
            setError(false)
          
            navigate("/home")
            
        }
    }).catch(err=>{
        setError(true)
    })

}   
return(
<div className=" login--card">
<div className='main'>
    <h1 className='heading text-4xl font-extrabold mt-24 mb-12 text-backtoblack'>Welcome Back!</h1>
<div class="w-full max-w">
<form class=" px-8 pt-6 pb-8 my-auto">
<div class="mb-4">
  <label class="block font-medium text-backtoblack text-gray-700  mb-3" for="email">
  <h1> Enter Email</h1>
  </label>
  <input 
   value={email}
   onChange={(e)=>handleEmail(e)}
   className=" input text-base-100 bg-white bg-offwhite input-bordered w-full rounded  py-2 px-4"
   id="email" type="text" placeholder="Enter Email"/>
</div>
<div className="mb-2">
  <label className="block font-medium  text-backtoblack  mb-2" for="password">
    <h1>Enter Password</h1>
  </label>
  <input 
   value={password}
   onChange={(e)=>handlePassword(e)}
   className="input input-bordered w-full text-base-100 bg-offwhite rounded pt-2 px-4  " 
   id="password" type="password" placeholder="Enter Password"/>
</div>
<div className="w-full text-center mb-8">
{error?<h6 className="text-red-800 font-light">Wrong Email or Password</h6>:null}
</div>
<div class="flex flex-col items-center justify-between">
  <button onClick={login} className="bg-base-100 w-64 mb-4 mx-auto hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Log In
  </button>
  <button onClick={navigateToSignUp}className="bg-base-100 w-64 mb-4  mx-auto hover:bg-slate-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Create Account
  </button>
  <a style={{color:"#040484"}}class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
    Forgot Password?
  </a>
</div>
</form>
</div>
</div>

</div>)
}

export default LoginCard