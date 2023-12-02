import { Link } from "react-router-dom"


export default function LocationListItem ({
    title, category, imageUrl, _id
}) {
    return(
        <div className="allLocations">
        <div className="allLocations-info">
          <img src={imageUrl} />
          <h6>{category}</h6>
          <h2>{title}</h2>
          <Link to={`/locations/${_id}`} className="details-button">Details</Link>
        </div>
      </div>
    )
}