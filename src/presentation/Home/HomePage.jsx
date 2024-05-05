
import useSWR from 'swr'
import axios from 'axios'
import Enviroment from '../../core'
import "../../styles/home.css"
import { Link } from 'react-router-dom'
const fetcher = url => axios(url,{headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}}).then(r => r.data)
function HomePage(props){
    const { data, error, isLoading } = useSWR(`${Enviroment.BASE_URL}/topic/user`, fetcher)
    console.log(data)
    console.log(error)
    return (
        <div className='bg-white  home--page '>
            
            <div 
            className='main content-around flex-row  w-full'>
            <h1>Pick a Quiz</h1>
            <div className='mx-auto flex '>
            {data? data.map(hashTop=>{
               const topic = hashTop.topic
               return <div  className="`card bg-white start font-bold rounded-sm  btn-outline w-48 mx-8 px-4 py-4 text-center
               my-4` ">
                   <Link to={`/quiz/topic/${topic.id}`}> <h1 className='text-lg font-semibold text-black '>{topic.name}</h1></Link>
                </div>
            }):null}
            </div>
</div>
        <div>

        </div>
        </div>
    )
}
export default HomePage