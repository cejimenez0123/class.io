
import { useState,useRef } from "react"
import "../../styles/quiz.css"
const Alphabet = ["A","B","C","D"]
function AnswerCard(props){


    const ref = useRef()
    console.log(props.active)
    return(<div  onClick={
        ()=>props.active? props.handleChoice(props.answer,bool=>{
            if(bool){
                ref.current.style.backgroundColor ="aquamarine"
            }else{
                ref.current.style.backgroundColor="red"
            }
           
        }):null
    }key={props.answer.id}>
        <button ref={ref} className={`btn-primary  bg-white border-solid border-black hover:bg-slate-200 w-36 my-2 px-8 py-4`}>
            <h2>{Alphabet[props.index]}.   {props.answer.content}</h2></button></div>
    )
}
export default AnswerCard