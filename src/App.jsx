import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LocationList from "./components/LocationsListItem/LocationsList";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header/>
      <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/locations" element={<LocationList />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
