import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./LocationDetails.css"

import * as locationService from "../../services/locationService";
import * as reviewService from "../../services/reviewService";
import AuthContext from "../../contexts/authContexts";

export default function LocationDetails() {
  const {email} = useContext(AuthContext)
  const [location, setLocation] = useState({});
  const [reviews, setReviews] = useState([])
  const { locationId } = useParams();

  useEffect(() => {
    locationService.getOne(locationId).then(setLocation);

    reviewService.getAll(locationId).then(setReviews);
  }, [locationId]);

  const addReviewHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newReview = await reviewService.create(
        locationId,
      formData.get("review"),
    );

    setReviews(state => [...state, {...newReview, author: {email}}])
    console.log(newReview);
  };

  return (
    <section id="location-details">
      <h1>Location Details</h1>
  <img src={location.imageUrl} className="card-img-top" alt={location.title}/>
  <div className="card-body">
    <h2>{location.title}</h2>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="text">{location.summary}</p>
    <Link to={`/locations`} className="btn btn-primary details-button">Back</Link>
  </div>

<div className="details-reviews">
          <h2>Reviews:</h2>
          <ul>
            {reviews.map(({_id, text, owner: { email } }) => (
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
        <form className="form" onSubmit={addReviewHandler}>
          <textarea name="review" placeholder="Review......"></textarea>
          <input className="btn submit" type="submit" value="Add Review" />
        </form>
      </article>
      


    <div className="buttons">
      <a href="#" className="btn submit">Edit</a>
      <a href="#" className="btn submit">Delete</a>
    </div> 
      

      
    </section>
  );
}