import { useContext, useEffect, useState, useReducer } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./LocationDetails.css";

import * as locationService from "../../services/locationService";
import * as reviewService from "../../services/reviewService";
import AuthContext from "../../contexts/authContexts";
import reducer from "./reviewReducer";
import { pathToUrl } from "../../utils/pathUtils";
import useForm from "../../hooks/useForm";
import Path from "../../paths";

export default function LocationDetails() {
  const { email, userId } = useContext(AuthContext);
  const [location, setLocation] = useState({});
  // const [reviews, setReviews] = useState([])
  const { locationId } = useParams();
  const [reviews, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate()

  useEffect(() => {
    locationService.getOne(locationId).then(setLocation);

    reviewService.getAll(locationId).then((result) => {
      dispatch({
        type: "GET_ALL_REVIEWS",
        payload: result,
      });
    });
  }, [locationId]);

  const addReviewHandler = async (values) => {
    const newReview = await reviewService.create(locationId, values.review);

    newReview.owner = { email };

    dispatch({
      type: "ADD_REVIEW",
      payload: newReview,
    });
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${location.title}`
    );

    if (hasConfirmed) {
      await locationService.remove(locationId);

      navigate("/locations");
    }
  };

  const { values, onChange, onSubmit } = useForm(addReviewHandler, {
    review: "",
  });
  
  return (
    <section id="location-details">
      <h1>Location Details</h1>
      <img
        src={location.imageUrl}
        className="card-img-top"
        alt={location.title}
      />
      <div className="card-body">
        <br />
        <h2>{location.title}</h2>
        <h3>{location.category}</h3>
        <p className="card-text">{location.summary}</p>
        <Link to={`/locations`} className="btn btn-primary details-button">
          Back
        </Link>
      </div>

      <div className="details-reviews">
        <h2>Reviews:</h2>
        <ul>
          {reviews.map(({ _id, text, owner: { email } }) => (
            <li key={_id} className="review">
              <p>
                {email}: {text}
              </p>
            </li>
          ))}
        </ul>
        {reviews.length === 0 && <p className="no-reviews">No reviews.</p>}
      </div>

      <article className="create-review">
        <label>Add new review:</label>
        <form className="form" onSubmit={onSubmit}>
          <textarea
            name="review"
            value={values.location}
            onChange={onChange}
            placeholder="Review......"
          ></textarea>
          <input className="btn submit" type="submit" value="Add Review" />
        </form>
      </article>

      {userId === location._ownerId && (
       
       <div className="button-container">
        <br />
          <h4>Options for {location.title}</h4>
         <Link
           to={pathToUrl(Path.LocationEdit, { locationId })}
           className="button"
         >
           Edit
         </Link>
         <button className="button" onClick={deleteButtonClickHandler}>
           Delete
         </button>
       </div>
     )}
      
    </section>
  );
}
