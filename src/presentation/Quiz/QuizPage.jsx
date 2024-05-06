
import useSWR from 'swr'
import axios from 'axios'
import Enviroment from '../../core'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/quiz.css"
import AnswerCard from './AnswerCard'
import MyContext from '../../context'
function QuizPage(props){
    const navigate = useNavigate()
    const [index,setIndex] = useState(0)
    const {setChosenAnswers,correctAnswers,setCorrectAnswers} = useContext(MyContext)
    const [questions,setQuestions]=useState([])
    const [question,setQuestion]=useState(null)
    const [answers,setAnswers]=useState([])
    const [count,setCount]=useState(1)
    const [active,setActive]=useState(true)
    
    const params = useParams()
    const topicId = params["topicId"]
    const quizId = params["quizId"]
    function getQuestions(){
        axios.get(`${Enviroment.BASE_URL}/question/topic/${topicId}/quiz/${quizId}/${count}`).then(res=>{
                setQuestions(res.data)
                const {question,answers} = res.data[0]
                setQuestion(question)
                setAnswers(answers)
                setActive(true)
        }) 
    }
    const handleNext = ()=>{
        if(index<questions.length-1){
            const newIndex = index+1
            let {question,answers} = questions[newIndex]
            setQuestion(question)
            console.log(questions)
            setAnswers(answers)
            setActive(true)
            setIndex(newIndex)
        }

    }
    const handleCount = (e)=>
    {   if(e.currentTarget.value>0){
        setCount(e.currentTarget.value)
    }
    }
    const newQuiz = ()=>{
        setChosenAnswers([])
        setCorrectAnswers([])
        setQuestions([])
        getQuestions()

    }
    function handleChoice(answer,response){
        
        if(question.correctAnswer.includes(answer.content)){    
           
            setActive(false)
            setChosenAnswers(prevState=>[...prevState,answer])
            setCorrectAnswers(prevState=>[...prevState,answer])
            response(true)
        }else{
           
            setActive(false)
            setChosenAnswers(prevState=>[...prevState,answer])
            response(false)
        }

       
    }
    const handleDone = ()=>{
        navigate("/quiz/complete")
    }
    return(<div id='quiz--page' className='bg-offwhite'>
        
            <div className='mx-auto pt-16'>
                {question?<div className='main'>
                    <h1 className='text-xl text-base-100 quiz--question'>{questions.length}. {question.content}</h1>

                    <div>
                        {answers.map((answ,i) =>{
                        return <AnswerCard active={active} answer={answ} index={i} handleChoice={handleChoice}/>
                    
})}
                        </div>
                </div>:null}
            </div>

            <div className="buttons mx-auto">
            {question?
            <div>
               {index+1!==questions.length? 
               <button className='btn-primary
                                    w-48 
                                    h-24
                                    text-offwhite
                                    text-2xl
                                 border-solid  my-24 border-black w-48 bg-base-100 text-white mx-4 hover:bg-slate-400 border rounded-lg px-8 py-4'
             onClick={handleNext}>Next</button>:null}
             <button onClick={handleDone} className='btn-primary 
                                border-solid  
                                my-24 border-base-100
                                w-48 
                                h-24
                                text-2xl
                                text-backtoblack
                                bg-offwhite
                                hover:bg-slate-400 
                                border 
                                rounded-lg
                                px-8 
                               '>
                Done</button></div>:<div className='w-64 text-center'>
                <h1 className='pb-8'>How many questions for this quiz?</h1>
                <input type="number" className='input w-full bg-offwhite input-bordered max-w-xs'  name='count' value={count} onChange={(e)=>handleCount(e)}/>
            <button className='btn-primary border-solid text-2xl mx-auto my-40 border-backtoblack bg-backtoblack text-offwhite w-64 bg-white hover:bg-slate-400 border rounded-lg px-6 py-4'
             onClick={newQuiz}>Start</button></div>}
            </div>

    </div>)

}
export default QuizPage

function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const dp = [];
  
    // Initialize DP table
    for (let i = 0; i <= len1; i++) {
      dp[i] = [];
      dp[i][0] = i; // Minimum edits to change an empty string to str1[0...i-1]
    }
    for (let j = 0; j <= len2; j++) {
      dp[0][j] = j; // Minimum edits to change an empty string to str2[0...j-1]
    }
  
    // Calculate edit distances for each pair of characters
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1; // Cost of substitution is 1, cost of match is 0
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost); // Minimum of insertion, deletion, or substitution
      }
    }
  
    return dp[len1][len2]; // Minimum edit distance to transform str1 to str2
  }