import { useNavigate } from "react-router-dom";
import * as locationService from "../../services/locationService";

export default function LocationCreate() {
  const navigate = useNavigate();

  const createLocationSubmitHandler = async (e) => {
    e.preventDefault();

    const locationData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await locationService.create(locationData);

      navigate("/locations");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createLocationSubmitHandler}>
        <div className="container">
          <h1>Create Location</h1>
          <label htmlFor="leg-title">Location title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter location title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter location category..."
          />

          <label htmlFor="location-img">Image:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter a valid image URL..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Create Location" />
        </div>
      </form>
    </section>
  );
}
