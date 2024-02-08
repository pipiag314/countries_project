import { Link, useParams } from "react-router-dom"
import styles from "./CurrencyCard.module.css";
import { getCurrency } from "../../api/fetchCurrency";
import { useEffect } from "react";

const CurrencyPage = () => {

  const currency = JSON.parse(`${localStorage.getItem("currency")}`)

  console.log(currency);
  
  const {code} = useParams();
  
  // useEffect(() => {
  // //   getCurrency()
  // //     .then((data) => {
  // //       console.log(data)
  // // localStorage.setItem("currency", data);
  // //     })
  // }, [])
  
  return (
    <>
      <Link to={`/countries/${code}`}>
          <button className={styles.goBack}>go back</button>
      </Link>
      <div>
        <div>CurrencyPage for {code}</div>
        <div>
          <h1>Currency Converter</h1>
          <p>Enter the amount to convert.</p>
          <div>
            <label htmlFor="currency-from">From</label>
            <input type="text" id="currency-from" value={code} disabled />
          </div>
          <div>
            <label htmlFor="currency-to">To</label>
            <select value="" id="currency-to" style={{width: "200px", height: "50px", fontSize: "20px"}}>
              <option value="">EUR</option>
              <option value="">GEL</option>
              <option value="">LIR</option>
            </select>
          </div>

        </div>
      </div>
    </>
  )
}
export default CurrencyPage