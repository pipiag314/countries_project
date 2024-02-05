import { CountryInterface } from "../types/countryTypes";
import styles from "./CurrencyCard.module.css";

interface CurrencyCardProps {
  country: CountryInterface | null;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({country}) => {
  return (
    <div className={styles.container}>
        <h1>Check out Currency in {country?.name.common}</h1>
    </div>
  )
}
export default CurrencyCard;