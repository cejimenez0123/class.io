import axios from "axios"
import Enviroment from "../core"



export default function useCaseCreateFlashcards(topicId,count,get){
       
        axios.post(`${Enviroment.BASE_URL}/flashcard/topic/${topicId}/count/${count}`,
        {topicId:topicId},
     ).then(res=>{
           get(res.data)
        }).catch(err=>{
            console.log(err)
        })

}