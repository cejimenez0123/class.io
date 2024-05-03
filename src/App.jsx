import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import "./styles/landing.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='landing '>
   <div className=" sign--card">
    <div className='main'>
    <h1 className='heading text-xl mb-12'>Welcome Back!</h1>


 
    

<div class="w-full max-w">
  <form class=" px-8 pt-6 pb-8 my-auto">
    <div class="mb-4">
      <label class="block font-medium text-gray-700  mb-3" for="username">
        Enter Email
      </label>
      <input class=" border login--input w-full rounded  py-2 px-4   " id="username" type="text" placeholder="Enter Email"/>
    </div>
    <div class="mb-6">
      <label className="block font-medium  text-gray-700  mb-4" for="password">
        Enter Password
      </label>
      <input className=" border w-full login--input  rounded py-2 px-4  mb-3 " id="password" type="password" placeholder="Enter Password"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  </div>
</div>
  </div>
  <div className=" logo--card">
    <div className='logo'>
      <img/>
    </div>
    03
  </div>
      </div>
    </>
  )
}

export default App
