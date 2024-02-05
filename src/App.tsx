import "./App.css";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage/CountryPage";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
// import HomePage from "./pages/HomePage/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage/SingleCountryPage";
import { getReversGeocoding } from "./api/fetchGeocoding";
import { useEffect } from "react";
import { getCountryByFullName } from "./api/fetchCountries";


function App() {
  const navigate = useNavigate();

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude: lat, longitude: lng} = position.coords
      getReversGeocoding(lat, lng)
        .then(data => {
          console.log(data)
          const address = data.plus_code.compound_code;
          const address_array = address.split(" ");
          const country = address_array[address_array.length - 1]
          
          if(country) {
            alert(`Looks like you are from ${country}`)
            getCountryByFullName(country)
              .then(data => {
                const cca2_code = data[0].cca2;
                navigate(`/countries/${cca2_code}`)
              })
        
          }
        })
    }, (error) => {
      console.log(error.message)
    }, {enableHighAccuracy: true})

  }, [])
  
  
  return (
    <main className="wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<CountryPage />} />
        <Route path="/countries/:code" element={<SingleCountryPage />} />
        <Route path="/currency" element={<CurrencyPage />} />
      </Routes>
      
    </main>
  );
}

export default App;
