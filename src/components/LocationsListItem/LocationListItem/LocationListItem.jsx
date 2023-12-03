import { Link } from "react-router-dom"
import {useContext} from "react";

import './LocationListItem.css'
import AuthContext from "../../../contexts/authContexts";


export default function LocationListItem ({
    title, category, imageUrl, _id
}) {

    const { isAuthenticated, username } = useContext(AuthContext);

    
    return(
        <div className="card">
          <img src={imageUrl} className="card-img-top-bottom" alt={title}/>
          <h6>{category}</h6>
          <h2 className="card-title">{title}</h2>


          {isAuthenticated && (
        <Link to={`/locations/${_id}`} className="btn btn-primary details-button">Details</Link>

        )}


        </div>
    )
}