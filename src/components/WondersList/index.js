import React,{useState,useEffect} from "react"
import { Circles } from 'react-loader-spinner'
import WonderItem from "../WonderItem"
import "./index.css"

const WondersList = () => {
    const [wondersData, setWondersData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() =>{
        const getDetails = async() =>{
            try{
                const response = await fetch("http://localhost:3005/wonders/");
                const data = await response.json()
                const updatedData = data.map(eachItem =>({
                    id:eachItem.id,
                    title:eachItem.title,
                    thumbnailUrl:eachItem.thumbnail_url,
                    location:eachItem.location
                }))
                setWondersData(updatedData)
                setLoading(false)
            }catch(error){
                console.log("Error fetching data:", error)
            }
        };
        getDetails();
    }, []);

    
    return(
     <div className="wonders-container">
        {isLoading? <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />:wondersData.map((item) =>(
    <WonderItem wonderData={item} key={item.id}/>
))}
        
     </div>
    )
}

export default WondersList