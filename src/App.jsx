import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from "react-router-dom"
import './App.css'
import './index.css'
import "./styles/landing.css"
import CompletedPage from "./presentation/Completed/CompletedPage"
import LandingPage from './presentation/Landing/LandingPage'
import SignCard from './presentation/Landing/SignCard'
import TopicTab from './presentation/Landing/TopicCard'
import LoginCard from './presentation/Landing/LogInCard'
import HomePage from './presentation/Home/HomePage'
import QuizPage from './presentation/Quiz/QuizPage'
import MyContext from './context'
function App() {
  const [quiz,setQuiz]= useState(null)
  const [chosenAnswers,setChosenAnswers]=useState([])
    const [correctAnswers,setCorrectAnswers]=useState([])
  return (
    <>
      <MyContext.Provider value={{quiz,setQuiz,chosenAnswers,setChosenAnswers,correctAnswers,setCorrectAnswers}}>
    <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<SignCard/>}/>
          <Route path="/auth/topics" element={<TopicTab/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/quiz/topic/:id" element={<QuizPage/>}/>
          <Route path="/quiz/complete" element={<CompletedPage/>}/>
    </Routes>
    </MyContext.Provider>
    </>
  )
}

export default App
