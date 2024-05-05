import axios from "axios"
import Enviroment from "../core"
import { useContext } from "react"
import MyContext from "../context"


export default function useCaseCreateQuiz(topicId,token,get){
    
        axios.post(`${Enviroment.BASE_URL}/quiz/`,
        {topicId:topicId},
        {headers:{
            Authorization: 'Bearer ' + token
        }}).then(res=>{
           get(res.data)
        }).catch(err=>{
            console.log(err)
        })
}
