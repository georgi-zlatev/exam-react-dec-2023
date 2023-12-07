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
        <div className="location">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <p>{category}</p>
            </div>
            <div className="data-buttons">
                <Link to={pathToUrl(Path.LocationDetails, { locationId: _id })} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}