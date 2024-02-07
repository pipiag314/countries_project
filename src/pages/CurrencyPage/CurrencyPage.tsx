import { Link, useParams } from "react-router-dom"
import styles from "./CurrencyCard.module.css";

const CurrencyPage = () => {

  const {code} = useParams();
  
  return (
    <>
      <Link to={`/countries/${code}`}>
          <button className={styles.goBack}>go back</button>
      </Link>
      <div>
        <div>CurrencyPage for {code}</div>
      </div>
    </>
  )
}
export default CurrencyPage