import { useContext } from "react"
import MyContext from "../../context"
import "../../styles/completed.css"

export default function CompletedPage(props){

    const {chosenAnswers,correctAnswers} = useContext(MyContext)
    const score = Math.floor((correctAnswers.length/chosenAnswers.length) * 100)
    let text = "Congratulations!"
    if(score>90){
        text = "You did amazing!"
    }else if(score>75){
        text = "You're doing great! Keep going"
    }else if(score>50){
        text = "We all need to start somewhere"
    }else{
        text= "Try Try Try Again"
    }
    return(<>
        <div id="completed--page">
                    <div  className="mx-auto border-solid rounded-lg border mt-24 h-72 border-black pt-16 w-64 text-center">
                        <h1 className="text-3xl font-bold text-black">Your score</h1>
                        <h1 className="score--h font-extrabold text-4xl text-black">
                            {score}%
                        </h1>
                        <h1 className="text-xl mt-8">{text}</h1>
                    </div>
        </div>
    
    </>)
}