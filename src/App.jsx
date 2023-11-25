import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes>  
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
