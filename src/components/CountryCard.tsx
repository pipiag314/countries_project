import { CountryInterface } from "../types/countryTypes";
import styles from "./CountryCard.module.css"

interface CountryCardProps {
    country: CountryInterface;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className={styles.container}>
        <img src={country.flags.png} alt={"Country " + country.name.common} />
        <h1>{country.name.common}</h1>
    </div>
  )
}
export default CountryCard