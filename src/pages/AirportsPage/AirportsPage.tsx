import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getAirportsByCountryCode } from "../../api/fetchAirports";

import styles from "./AirportsPage.module.css";

const AirportsPage = () => {

    const [airports, setAirports] = useState<null | AirportsType>(null)
    
    const {code} = useParams();

    useEffect(() => {
        if(!code) return;
        getAirportsByCountryCode(code)
            .then(data => {
                setAirports(data);
            })
    }, [])
    

    if(!airports) return <div>Loading...</div>
    
    
  return (
    <>
        <Link to={`/countries/${code}`}>
            <button className={styles.goBack}>
                Go Back
            </button>
        </Link>
        <div className={styles.container}>
            {airports?.map(airport => {
                return (
                    <div className={styles.card_container}>
                        <h1>name: {airport.name}</h1>
                        <h1>city: {airport.city}</h1>
                        <h1>region: {airport.region ? airport.region : "N/A"}</h1>
                    </div>
                )
            })}
        </div>
    </>
  )
}
export default AirportsPage