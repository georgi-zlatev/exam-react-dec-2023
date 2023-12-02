import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.css';
import LocationList from "./components/LocationsListItem/LocationsList";

function App() {
  return (
    <div>
      <Header/>
      <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/locations" element={<LocationList />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
