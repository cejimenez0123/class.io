import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from "react-router-dom"
import './App.css'
import './index.css'
import "./styles/landing.css"
import LandingPage from './presentation/Landing/LandingPage'
import SignCard from './presentation/Landing/SignCard'
import TopicCard from './presentation/Landing/TopicCard'
import LoginCard from './presentation/Landing/LogInCard'
import HomePage from './presentation/Home/HomePage'
function App() {

  return (
    <>
    <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<SignCard/>}/>
          <Route path="/auth/topics" element={<TopicCard/>}/>
          <Route path="/home" element={<HomePage/>}/>

    </Routes>
    {/* <LandingPage/> */}
    </>
  )
}

export default App
