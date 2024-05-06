import { useState } from "react"
import "../../styles/flashcard.css"

import { useNavigate,useParams} from "react-router-dom"
import useCaseCreateFlashcards from "../../usecase/useCaseCreateFlashcards"


function FlashcardPage(props){
    const [count,setCount]=useState(2)
    const navigate = useNavigate()
    const params = useParams()
    const [index,setIndex] = useState(0)
    const [flashcards,setFlashcards]=useState([])
    const [flashcard,setFlashcard]=useState(null)
    const handleNext = ()=>{
        const newIndex = index + 1
        if(newIndex<=flashcards.length){
            setFlashcard(flashcards[newIndex])
            setIndex(newIndex)
        }
    }
    const getFlashcards = ()=>{
        useCaseCreateFlashcards(params.topicId,count,data=>{

            setFlashcards(data)
            setFlashcard(data[0])
            
        })
    }
    const handleCount = (e)=>{
       const value = e.currentTarget.value
       if(value>1){
            setCount(value)
       }
    }
    const newFlashcards = ()=>{
        setFlashcards([])
        setIndex(0)
        getFlashcards()
    }

const handleBack = (e)=>{
    const newIndex = index -1
        if(newIndex>=0 && flashcards.length>0){
        setFlashcard(flashcards[newIndex])

        setIndex(newIndex)
        }
}
    return (<div id="flashcard--page" className="  bg-offwhite">
        <div className="mx-auto flex  pt-24 w-fit">
     {flashcard?
            <div className="">
                
               <div>
                <div class="flip-card mx-auto w-64 h-48 ">
  <div class="flip-card-inner">
    <div class="flip-card-front border border-solid border-blacktoblack  w-64 h-48 px-2 px-4 rounded-lg">
        <div className="mt-16"><h1>{flashcard.front}
      </h1></div>
    </div>
    <div class="flip-card-back w-64 h-48 border border-solid border-blacktoblack rounded-lg px-2 py-4">
      <h1>{flashcard.back}</h1>
    </div>
  </div>
</div>
<div className="mx-auto w-fit">
    {index!=0 && index>0?<button className='btn-primary
                                    w-48 
                                    h-18
                                    text-offwhite
                                    text-2xl
                                    border-solid  
                                    my-24 
                                    border-black 
                                    w-48 
                                    bg-base-100 
                                    text-white 
                                    mx-4 
                                    hover:bg-slate-400 
                                    border 
                                    rounded-lg 
                                    px-8 
                                    py-4'
             onClick={handleBack}>Back</button>:null}
            <button className='btn-primary
                                    w-48 
                                    h-18
                                    text-offwhite
                                    text-2xl
                                    border-solid  
                                    my-24 
                                    border-black 
                                    w-48 
                                    bg-base-100 
                                    text-white 
                                    mx-4 
                                    hover:bg-slate-400 
                                    border 
                                    rounded-lg 
                                    px-8 
                                    py-4'
             onClick={handleNext}>Next</button></div>
</div>
             </div>:
                <div className='w-64 text-center'>
                <h1 className='pb-8 text-2xl text-backtoblack'>Enter the amount of Flashcards you want?</h1>
                <input type="number" className='input text-xl text-backtoblack w-full bg-offwhite input-bordered max-w-xs'  name='count' value={count} onChange={(e)=>handleCount(e)}/>
            <button className='btn-primary border-solid text-2xl mx-auto my-40 border-backtoblack bg-backtoblack text-offwhite w-64 bg-white hover:bg-slate-400 border rounded-lg px-6 py-4'
             onClick={newFlashcards}>Start Flashcards</button></div>}</div>
    </div>)
}

export default FlashcardPage