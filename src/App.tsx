import "./App.css";

// 3rd party imports
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// component imports
import Navbar from "./components/Navbar";

// Page imports
import CountryPage from "./pages/CountryPage/CountryPage";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
import SingleCountryPage from "./pages/SingleCountryPage/SingleCountryPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

// fetch function imports
import { getReversGeocoding } from "./api/fetchGeocoding";
import { getCountryByFullName } from "./api/fetchCountries";
import AirportsPage from "./pages/AirportsPage/AirportsPage";


function App() {
  const navigate = useNavigate();

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude: lat, longitude: lng} = position.coords
      getReversGeocoding(lat, lng)
        .then(data => {
          const address = data.plus_code.compound_code;
          const address_array = address.split(" ");
          const country = address_array[address_array.length - 1]
          
          if(country) {
            alert(`Looks like you are from ${country}`)

            /** DOESN'T work on every country: UK, USA */
            /** TODO:  fix this bug */
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
        <Route path="/currency/:code" element={<CurrencyPage />} />
        <Route path="/airports/:code" element={<AirportsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </main>
  );
}

export default App;
