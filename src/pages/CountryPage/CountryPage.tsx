import { useEffect, useRef, useState } from "react";
import CountryCard from "../../components/CountryCard";
import styles from "./CountryPage.module.css";
import { getAllCountries } from "../../api/fetchCountries";
import { Link } from "react-router-dom";
import { filterCountries } from "../../utils/forFiltering";
import { CountriesType } from "../../types/countryTypes";


const CountryPage = () => {
  const [countries, setCountries] = useState<null | CountriesType>(null)
  const [filteredCountries, setFilteredCountries] = useState<null | CountriesType>(null)
  const inputRef = useRef<null | HTMLInputElement>(null);
  
  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setCountries((data as unknown) as CountriesType);
        setFilteredCountries((data as unknown) as CountriesType);
      })
  }, []);


  const handleChange = () => {
    if(!countries) return;
    const filtered = filterCountries(countries, inputRef)
    if(!filtered) return;
    setFilteredCountries(filtered);
  }  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.searchbox}>
        <label htmlFor="country">Search Your Country: </label>
        <input ref={inputRef} onChange={handleChange} type="text" id="country" placeholder="Enter a Country Name" />
      </div>
      <div className={styles.countrygrid}>
        {/* all countries here */}
        {filteredCountries?.length === 0 && <h1>No results found</h1>}
        {filteredCountries && filteredCountries?.map(country => {
          return  (
            <Link to={`/countries/${country.cca2}`} key={country.name.common}>
              <CountryCard country={country} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default CountryPage;