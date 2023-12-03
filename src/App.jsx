import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';

import * as authService from './services/authService'
import AuthContext from "./contexts/authContexts";
import Path from "./paths";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LocationList from "./components/LocationsListItem/LocationsList";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import LocationDetails from "./components/LocationDetails/LocationDetails";

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)
  }

  

  const registerSubmitHandler = async (values) => {
    console.log(values);
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
}

const logoutHandler = () => {
  setAuth({});
  localStorage.removeItem('accessToken')
}

const values = { 
    loginSubmitHandler, 
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email, 
    email: auth.email, 
    isAuthenticated: !!auth.accessToken
  }
  return (
    <div>
          <AuthContext.Provider value={values}>
      <Header/>
      <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/locations" element={<LocationList />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler}/>} />
      <Route path="/register" element={<Register />} />
      <Route path={Path.Logout} element={<Logout/>}/>
      <Route path="/locations/:locationId" element={<LocationDetails />} />

      </Routes>
      <Footer/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
