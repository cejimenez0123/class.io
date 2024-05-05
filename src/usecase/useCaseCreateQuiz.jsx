import axios from "axios"
import Enviroment from "../core"


export default function useCaseCreateQuiz(topicId,get){
        axios.post(`${Enviroment.BASE_URL}/quiz/`,{topicId:topicId},{Authorizaton:`Bearer ${localStorage.getItem("token")}`}).then(res=>{
           get(res.data)
        }).catch(err=>{
            console.log(err)
        })
}
