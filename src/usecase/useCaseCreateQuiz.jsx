import axios from "axios"
import Enviroment from "../core"



export default function useCaseCreateQuiz(topicId,get){
        const token = localStorage.getItem("token")
        if(token!=null){
        axios.post(`${Enviroment.BASE_URL}/quiz/`,
        {topicId:topicId},
        {headers:{
            Authorization: 'Bearer ' + token
        }}).then(res=>{
           get(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }else{
        get({error:"NULL TOKEN"})
    }
}
