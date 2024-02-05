import { CountryInterface } from "../types/countryTypes";
import styles from "./AirportsCard.module.css";

interface AirportsCardProps {
  country: CountryInterface | null;
}

const AirportsCard: React.FC<AirportsCardProps> = ({country}) => {
  return (
    <div className={styles.container}>
        <h1>Check out Airports in {country?.name.common}</h1>
    </div>
  )
}
export default AirportsCard;