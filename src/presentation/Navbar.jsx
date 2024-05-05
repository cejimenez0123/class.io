import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Enviroment from "../core";
import { useState,useEffect, useContext } from "react";
import MyContext from "../context";


export default function Navbar(props){

    const {token,setToken}= useContext(MyContext)
   
    const navigate = useNavigate()
    const checkAuth=()=>{
        const tokenStr = localStorage.getItem("token")
        if(tokenStr){
          axios.get(Enviroment.BASE_URL+"/auth/", { 
            headers: 
              { Authorization: "Bearer " + tokenStr,
             }
            }).then(res=>{
            if(res.status==200){
              setToken(tokenStr)
              console.log("tokenStr",tokenStr)
              console.log("token",token)
            }   
          }).catch(err=>{
            setToken(null)
            localStorage.removeItem("token")
            console.log("tokenStr",tokenStr)
            console.log("token",token)
          }
          )
        }
      
    }
      const logOut=()=>{
        setToken(null)
        navigate("/")
      }
      useEffect(()=>{
        checkAuth()
        return ()=>{}
      },[])
      const loggedOut = !token
      const loggedIn = token
    return(
<div className="navbar bg-base-100">
<div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {loggedIn ? <li><Link to="/home">Home</Link></li>:null}
      {loggedOut? <li>
          <a>Register</a>
          <ul className="p-2">
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </li>:null}
        {loggedIn ? <li><Link to="/home">Class</Link></li>:null}
      </ul>
    </div>
    </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Class.io</a>
  </div>

      <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {loggedIn ?<li><Link to="/home">Home</Link></li>:null}
      {loggedOut?<li>
        <details>
          <summary>Register</summary>
          <ul className="p-2">
          <li><Link to="/">Log In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </details>
      </li>:null}
      {loggedIn ?<li><Link to="/class">Class</Link></li>:null}
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    {!token||token=="null"?
null:<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={logOut}><a>Logout</a></li>
      </ul>
    </div>}
  </div>
</div>
    )
}