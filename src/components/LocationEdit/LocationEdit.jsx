import { useEffect, useState } from "react";

import * as locationService from "../../services/locationService";
import { useNavigate, useParams } from "react-router-dom";

export default function LocationEdit() {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const [location, setLocation] = useState({
    title: "",
    category: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    locationService.getOne(locationId).then((result) => {
      setLocation(result);
    });
  }, [locationId]);

  const editLocationSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await locationService.edit(locationId, values);
      navigate(`/locations/${locationId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setLocation((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return(
    <section id="create-page" className="auth">
      <form id="create" onSubmit={editLocationSubmitHandler}>
        <div className="container">
          <h1>Create Location</h1>
          <label htmlFor="leg-title">Location title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter location title..."
            value={location.title}
            onChange={onChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter location category..."
            value={location.category}
            onChange={onChange}
          />

          <label htmlFor="location-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={location.imageUrl}
            onChange={onChange}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" value={location.summary}
            onChange={onChange}></textarea>
          <input className="btn submit" type="submit" value="Edit Location" />
        </div>
      </form>
    </section>
  )
}
