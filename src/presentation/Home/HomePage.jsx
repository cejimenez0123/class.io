
import useSWR from 'swr'
import axios from 'axios'
import Enviroment from '../../core'
import "../../styles/home.css"
import useCaseCreateQuiz from '../../usecase/useCaseCreateQuiz'
import { useNavigate } from 'react-router-dom'
const token = localStorage.getItem('token')
const fetcher = url => axios(url,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}}).then(r => r.data)
function HomePage(props){
    const { data, error, isLoading } = useSWR(`${Enviroment.BASE_URL}/topic/user`, fetcher)
   
    const navigate = useNavigate()
    const handleNewQuiz = (topic)=>{
        useCaseCreateQuiz(topic.id,token,data=>{
            navigate(`/quiz/${data.id}/topic/${data.topicId}/`)
        })
    }
    if(isLoading) return <div className='bg-white  home--page '>
        Loading
    </div>
    if(error){
        console.log(error)
        return <div className='bg-white  home--page '>
            Error
        </div>
    }
    return (
        <div className='bg-white  home--page '>
            
            <div 
            className='text-base-100 content-around  flex-row  w-full'>
            <div>
            <h1 className=' text-2xl ml-8 p-4'>Flashcards</h1>
            <div className='mx-auto flex '>
            {data? data.map(hashTop=>{
               const topic = hashTop.topic
               return <div  onClick={()=>handleNewQuiz(topic)} className="border hover:border-8 hover:border-slate-100 border-base-100 w-48 mx-8 px-4 py-4   h-32 rounded-lg 
               border-solid  " > <div  className=" card 
                                        bg-white
                                        start 
                                        font-bold 
                                      
                                       
                                        m-8
                                        
                                        btn-outline text-center
               my-4` ">
                   
                   <h1 className='text-lg mx-auto my-auto font-semibold text-base-100 '>{topic.name}</h1>
                </div></div>
            }):null}
            </div> 
            </div>
            <div>
            <h1 className=' text-2xl ml-8 p-4'>Pick a Quiz</h1>
            <div className='mx-auto flex '>
            {data? data.map(hashTop=>{
               const topic = hashTop.topic
               return <div  onClick={()=>handleNewQuiz(topic)} className="border hover:border-8 hover:border-slate-100 border-base-100 w-48 mx-8 px-4 py-4   h-32 rounded-lg 
               border-solid  " > <div  className=" card 
                                        bg-white
                                        start 
                                        font-bold 
                                      
                                       
                                        m-8
                                        
                                        btn-outline text-center
               my-4` ">
                   
                   <h1 className='text-lg mx-auto my-auto font-semibold text-base-100 '>{topic.name}</h1>
                </div></div>
            }):null}
            </div>
            </div>
</div>
        <div>

        </div>
        </div>
    )
}
export default HomePage
