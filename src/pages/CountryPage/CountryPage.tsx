import { useRef } from "react";
import CountryCard from "../../components/CountryCard";
import styles from "./CountryPage.module.css";
import { Link } from "react-router-dom";
import { useCountry } from "../../store/store";


const CountryPage = () => {
  const countries = useCountry((state) => state.countries);
  const filteredCountries = useCountry((state) => state.filteredCountries);

  const filterCountriesBySearch = useCountry(state => state.filterCountriesBySearch)
  
  const inputRef = useRef<null | HTMLInputElement>(null);


  const handleChange = () => {
    if(!inputRef.current) return /**making sure that inputRef is not null */
    filterCountriesBySearch(countries, inputRef.current?.value) /**then calling filter function */
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchbox}>
        <label htmlFor="country">Search Your Country: </label>
        <input
          ref={inputRef}
          onChange={handleChange}
          type="text"
          id="country"
          placeholder="Enter a Country Name"
        />
      </div>
      <div className={styles.countrygrid}>
        {/* all countries here */}
        {filteredCountries?.length === 0 && <h1>No results found</h1>}
        {filteredCountries &&
          filteredCountries?.map((country) => {
            return (
              <Link to={`/countries/${country.cca2}`} key={country.name.common}>
                <CountryCard country={country} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default CountryPage;
