import { Link } from "react-router-dom"
import "./index.css"

const WonderItem = props =>{
    const {wonderData} = props
    const {id,title,thumbnailUrl,location} = wonderData
    return(
        <Link className="item-link" to={`wonders/${id}`}>
        <div className="item-container">
            <img src={thumbnailUrl} alt={`item${id}`} className = "item-image"/>
            <div className="item-info">
                <p className="item-title">{title}</p>
                <div className="item-location-info">
                    <p className="item-location">{location}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default WonderItem