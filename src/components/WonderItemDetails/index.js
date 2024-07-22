import React, {useState,useEffect} from "react"
import { useParams } from "react-router-dom"

import "./index.css"



const WonderItemDetails = () => {
    const{id} = useParams();
    const [wonderData, setWonderData] = useState(null)
    const [isLoading,setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const getDetails = async() =>{
            setLoading(true)
            try{
                const response = await fetch(`https://wondersbackendproject-5.onrender.com/wonders/${id}`)
                if(!response.ok){
                    throw new Error("Failed to fetch data")
                }
                const data = await response.json()
                const updatedData = {
                    title:data.title,
                    imageUrl:data.img_url,
                    content:data.content
                };
                setWonderData(updatedData)
                setError(null)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        };
        getDetails();

        return () => {
            setWonderData(null);
        }
    },[id]);

    const renderWonderDetails = () =>{
        if(!wonderData){
            return <div>Loading.....</div>
        }

        const {title,imageUrl,content} = wonderData

        return(
            <div className="wonder-info">
                <h1 className="wonder-details-title">{title}</h1>
                <img src={imageUrl} alt={title} className={"wonder-img"}/>
                <p className="wonder-content">{content}</p>
            </div>
        )
    }


   return <div>{renderWonderDetails()}</div>
 

}

export default WonderItemDetails

