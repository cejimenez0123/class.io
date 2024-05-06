import "../../styles/class.css"



function ClassPage(props){


    return(<div  className="bg-white">
        <div id="class--page">

     
        <div className="flex flex-row mt-24 px-16">
            <button className="btn-primary border border-solid border-base-100 text-base-100 px-6 h-24 w-36 mr-6 py-4">Video</button>
            <button className="btn-primary border border-solid border-base-100 text-base-100 px-6 h-24 w-36 py-4">Study Group</button>

        </div>
        <div className="mx-16 mb-24">
            <div className="border border-solid border-base-100 w-full h-3/4  rounded-lg mt-16 m">

            </div>
            
        </div>
        </div>
    </div>)

}

export default ClassPage