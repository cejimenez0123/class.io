
import axios from "axios"
import Enviroment from "../../core"
import { useEffect } from "react"

function TopicCard(props){
    useEffect(()=>{
        axios.get(`${Enviroment.BASE_URL}/topic/`).then(res=>{
            console.log(res)
    
        })
    },[])
  

    return (<div className="landing">
        <div className="land--card">
        <div className="main">

        </div>
    </div>
    <div className="logo--card">

    </div>
    </div>)
}

export default TopicCard