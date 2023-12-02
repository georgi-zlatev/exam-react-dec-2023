import { Link } from "react-router-dom"

import './LocationListItem.css'


export default function LocationListItem ({
    title, category, imageUrl, _id
}) {
    return(
        <div className="card">
          <img src={imageUrl} className="card-img-top-bottom" alt=""/>
          <h6>{category}</h6>
          <h2 className="card-title">{title}</h2>
          <Link to={`/locations/${_id}`} className="btn btn-primary details-button">Details</Link>
        </div>
    )
}