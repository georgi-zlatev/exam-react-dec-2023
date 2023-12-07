import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function LatestLocation({
    _id,
    imageUrl,
    title,
    category,
}) {
    
    return (
        <div className="card">
          <img src={imageUrl} className="card-img" alt={title}/>
          <br />
          <h6>{category}</h6>
          <h2 className="card-title">{title}</h2>


                <Link to={pathToUrl(Path.LocationDetails, { locationId: _id })} className="btn details-btn">Details</Link>
            </div>
    );
}