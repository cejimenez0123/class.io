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
import Navbar from './presentation/Navbar'
import PrivateRoute from './PrivateRoute'
import MyContext from './context'
import LoggedRoute from './LoggedRoute'
import LogoCard from './presentation/Landing/LogoCard'
import ProfilePage from './presentation/Profile/ProfilePage'
import ClassPage from './presentation/Class/ClassPage'
import FlashcardPage from './presentation/Flashcard/FlashcardPage'
function App() {
  const [quiz,setQuiz]= useState(null)
  const [chosenAnswers,setChosenAnswers]=useState([])
    const [correctAnswers,setCorrectAnswers]=useState([])
  
  return (
    <>
      <MyContext.Provider value={{quiz,setQuiz,chosenAnswers,setChosenAnswers,correctAnswers,setCorrectAnswers}}>
      <Navbar/>
    <Routes>
         
          <Route path="/" element={<LoggedRoute><LandingPage/></LoggedRoute>
          }/>
          <Route path="/register" element={<LoggedRoute><SignCard/></LoggedRoute>}/>
          <Route path="/auth/topics" element={<TopicTab/>}/>
          <Route path="/home" element={
          <PrivateRoute ><HomePage/></PrivateRoute>
         }/>
         <Route path="/class" element={<PrivateRoute><ClassPage/></PrivateRoute>}/>
          <Route path="/quiz/:quizId/topic/:topicId" element={<QuizPage/>}/>
          <Route path="/profile" element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
          <Route path="/quiz/complete" element={<CompletedPage/>}/>
          <Route path="/topic/:topicId/flashcard" element={<FlashcardPage/>}/>
    </Routes>
    </MyContext.Provider>
    </>
  )
}

export default App
