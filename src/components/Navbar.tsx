import { setDarkMode, setLightMode } from "../utils/forDarkmode";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode();
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkModeOn) {
      setLightMode();
      setIsDarkModeOn(false);
    } else {
      setDarkMode();
      setIsDarkModeOn(true);
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        {/* Logo here */}
        <Link to="/">
          <h1>logo</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/countries">Countries</Link>
        {/* navbar links here as well*/}
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
    </header>
  );
};
export default Navbar;
