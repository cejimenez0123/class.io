
import axios from "axios"
import Enviroment from "../../core"
import { useEffect, useState } from "react"
import Topic from "../../domain/model/topic"
import { useNavigate } from "react-router-dom"
function TopicTab(props){
    const navigate = useNavigate()
    const [topics,setTopics]=useState([])
    const [topicsChosen,setTopicsChosen]=useState([])
    const token = localStorage.getItem("token")
    useEffect(()=>{
        axios.get(`${Enviroment.BASE_URL}/topic/`).then(res=>{
          
            let tops = res.data.map(top=>new Topic(top.id,top.name))
            setTopics(tops)
        })
    },[])
    const createUserTopic=()=>{
        let promises = topicsChosen.map(topic=>{
         return axios.post(`${Enviroment.BASE_URL}/topic/${topic.id}/user`,{},{headers:{
            Authorization: 'Bearer ' + token
        }})})
    
        Promise.all(promises).then(res=>{
            navigate("/home")
        })
    }
    const handleTopicClick=(topic)=>{
        
        if(topicsChosen.find(t=>t.id === topic.id)){
            let chosen = topicsChosen.filter(t=>t.id !== topic.id)
            setTopicsChosen(chosen)
        }else{ 
            setTopicsChosen(prevState=>{
                return [...prevState,topic]
            })
        }
        
    }
    return (<div className="landing">
        <div className="land--card">
        <div className="main">
            <div>
                {topics.map(top=>{
                    const chosen = topicsChosen.find(t=>t.id === top.id)
                    return <div 
                    onClick={()=>handleTopicClick(top)}
                    style={{border: chosen? "0.7em solid":""}}
                    className={`card rounded-sm border w-48 px-4 py-4
                    my-4`}>
                        <h1 className="text-xl">{top.name}</h1>
                    </div> })}
            </div>
            <button onClick={createUserTopic} className="bg-black">Next</button>
        </div>
    </div>
    <div className="logo--card">

    </div>
    </div>)
}
function TopicCard({topic,onClick}){
    const [chosen,setChosen]=useState(null)
    const handleChoice = (topic)=>{
        if(chosen){
            setChosen(null)
        }else{
            setChosen(topic)
        }
        onClick(topic)
    }
    return
}
export default TopicTab