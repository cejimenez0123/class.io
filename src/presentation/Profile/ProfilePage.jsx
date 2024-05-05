
import axios from "axios"
import useSWR from "swr"
import Enviroment from "../../core"
import "../../styles/profile.css"
export default function ProfilePage(props){
    const token = localStorage.getItem("token")
    const fetcher = url => axios(url,{headers:{Authorization: `Bearer ${token}`}}).then(r => r.data)
    const quizResponse = useSWR(`${Enviroment.BASE_URL}/quiz/user`, fetcher)
    const quizzes = quizResponse.data
    const quizzesError = quizResponse.error
    const quizzesLoading = quizResponse.isLoading
    const topicResponse = useSWR(`${Enviroment.BASE_URL}/topic/`, fetcher)
    const topics = topicResponse.data
    const topicError = topicResponse.error
    const topicsLoading = topicResponse.isLoading
    
    if(quizzesLoading || topicsLoading){
        return ( <div id="profile--page">
            Loading...
        </div>)
    }
    if(quizzesError || topicError){
        console.log(topicError)
        console.log(quizzesError)
        return ( <div id="profile--page">
            Error
        </div>)
    }
    return(<>
        <div id="profile--page">
            <div className="pl-8 pt-16">
            <h1 className="text-base-100 text-3xl mb-8" >Previous Quizzes</h1>
            {quizzes?quizzes.map(qObj=>{
                const {quiz} = qObj
                let topic = topics.find(topic=>topic.id===quiz.topicId)
                const time = new Date(quiz.created).toLocaleTimeString("en-US")
                const date = new Date(quiz.created).toLocaleDateString("en-Us")
                return(<div className="border text-center   border-solid border-base-100 w-48 px-6 py-4 rounded-lg">
                        <h1 className="mb-4 text-base-100">{topic.name} </h1>
                        <h1>{date}</h1>
                        <h1> {time}</h1>
                    </div>)
            }):null}
            </div>
        </div>

    </>)
}