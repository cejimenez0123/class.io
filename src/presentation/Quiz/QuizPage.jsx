
import useSWR from 'swr'
import axios from 'axios'
import Enviroment from '../../core'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import "../../styles/quiz.css"
import AnswerCard from './AnswerCard'
const fetcher = url => axios(url,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}}).then(r => r.data)
const Alphabet = ["A","B","C","D"]
function QuizPage(props){
    const [questions,setQuestions]=useState([])
    const [question,setQuestion]=useState(null)
    const [answers,setAnswers]=useState([])
    const [active,setActive]=useState(true)
    const [chosenAnswers,setChosenAnswers]=useState([])
    const [correctAnswers,setCorrectAnswers]=useState([])
    const params = useParams()
    const topicId = params["id"]
    function getQuestion(){
        axios.get(`${Enviroment.BASE_URL}/question/topic/${topicId}/${1}`).then(res=>{
            const {question,answers}= res.data
            setQuestion(question)
            setAnswers(answers)
            setQuestions(prevState=>{return[...prevState,question]})
            setActive(true)
        }) 
    }
    function handleChoice(answer,response){
        
        if(question.correctAnswer.includes(answer.content)){    
            response(true)
            setActive(false)
            setChosenAnswers(prevState=>[...prevState,answer])
            setCorrectAnswers(prevState=>[...prevState,answer])
        }else{
            response(false)
            setActive(false)
            setChosenAnswers(prevState=>[...prevState,answer])
        }

       
    }
    return(<div id='quiz--page'>
        
            <div className='mx-auto pt-16'>
                {question?<div className='main'>
                    <h1 className='text-xl quiz--question'>{questions.length}. {question.content}</h1>

                    <div>
                        {answers.map((answ,i) =>{
                        return <AnswerCard active={active} answer={answ} index={i} handleChoice={handleChoice}/>
                    
})}
                        </div>
                </div>:null}
            </div>

            <div className="buttons">
            {question?<div><button className='btn-primary border-solid  my-40 border-black w-48 bg-black text-white mx-4 hover:bg-slate-400 border rounded-sm px-8 py-4'
             onClick={getQuestion}>Next</button><button className='btn-primary border-solid  my-40 border-black w-48 bg-white hover:bg-slate-400 border rounded-sm px-8 py-4'>Done</button></div>:
            <button className='btn-primary border-solid  my-40 border-black w-48 bg-white hover:bg-slate-400 border rounded-sm px-8 py-4'
             onClick={getQuestion}>Start</button>}
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