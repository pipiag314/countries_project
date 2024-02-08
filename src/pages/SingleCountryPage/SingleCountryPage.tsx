import { useEffect, useState } from "react";
import { getSingleCountry } from "../../api/fetchCountries";
import { Link, useParams } from "react-router-dom";
import { CountryInterface } from "../../types/countryTypes";
import CurrencyCard from "../../components/CurrencyCard";
import AirportsCard from "../../components/AirportsCard";

import styles from "./SingleCountryPage.module.css";
import { formatLargeNumber } from "../../utils/forNumberFormatting";

const SingleCountryPage = () => {
  const [country, setCountry] = useState<null | CountryInterface>(null);

  const { code } = useParams();

  useEffect(() => {
    if (!code) return;
    getSingleCountry(code).then((data) => {
      const dataFromArray = data[0];
      setCountry(dataFromArray);
    });
  }, [code]);

  if(!country) {
    return <div>Loading...</div>
  }
  
  console.log(Object.keys(country.currencies)[0]);
  
  return (
    <>
       <Link to="/countries">
          <button className={styles.goBack}>go back</button>
        </Link>
      <div className={styles.container}>
        <div className={styles.info_section}>
          <div className={styles.info_section_img}>
            <img src={country?.flags.png} width="100%" alt="country image" />
            <img src={country?.coatOfArms.png} width={100} alt="coat of arms" />
          </div>
          <div className={styles.info_section_info}>
            <h1>Name: {country?.name?.common}</h1>
            <h1>Capital: {country?.capital[0]}</h1>
            <h1>Population: {formatLargeNumber(country.population)}</h1>
            <div>
              <h1>Time Zones: </h1>
              {country?.timezones.map((timezone) => (
                <p key={timezone}>{timezone}</p>
              ))}
            </div>
          </div>
          
          
        </div>

        <div className={styles.cards_container}>
          <Link to={`/currency/${code}`}>
            <CurrencyCard country={country} />
          </Link>

          <Link to={`/airports/${code}`}>
            <AirportsCard country={country} />
          </Link>
        </div>
        
      </div>
    </>
  );
};
export default SingleCountryPage;
