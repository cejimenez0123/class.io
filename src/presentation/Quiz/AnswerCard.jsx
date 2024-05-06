
import { useState,useRef } from "react"
import "../../styles/quiz.css"
const Alphabet = ["A","B","C","D"]
function AnswerCard(props){


    const ref = useRef()
    console.log(props.active)
    return(<div  onClick={
        ()=>props.active? props.handleChoice(props.answer,bool=>{
            if(bool){
                let green =
                // ref.current.style.backgroundColor =green
                ref.current.style.border="4px solid #809236"
            }else{
                // ref.current.style.backgroundColor ="#FF0000"
                ref.current.style.border=" 4px solid #FF0000"
            }
           
        }):null
    }key={props.answer.id}>
        <button ref={ref} className={`btn-primary  bg-white border-solid border-base-100 hover:bg-slate-100 w-36 my-2 px-8 py-4`}>
            <h2>{Alphabet[props.index]}.   {props.answer.content}</h2></button></div>
    )
}
export default AnswerCard