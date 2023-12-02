import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

export default function About() {
  return (
    <>
      <section className="about-content">
        <div className="container">
          <p>
            Welcome to Local Food Events, your go-to destination for exploring
            the culinary wonders of the city!
          </p>
          <p>
            Our mission is to guide you through the vibrant food scene,
            showcasing everything from trendy eateries to hidden gems. Whether
            you're a food enthusiast or someone looking to discover new flavors,
            Local Food Events is here to satisfy your cravings.
          </p>
        </div>
      </section>

      <h2>Meet Our Team</h2>
      <div className="card" >
        <img src="Georgi.jpg" className="card-img" alt="Georgi" />
        <div className="card-body">
          <h3 className="card-text">Georgi Zlatev</h3>
          <p>CTO</p>
          <a href="https://github.com/georgi-zlatev" className="btn btn-dark" target="_blank">Github</a>
        </div>
      </div>
    </>
  );
}
