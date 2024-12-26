import styles from "./Nav.module.css";

import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";

const Nav = () => {
  return (
    <div className={styles.bottom_navigation}>
      <button className={styles.nav_item}>
        <img src={icon1} alt="Mining" />
        <span>Mining</span>
      </button>
      <button className={styles.nav_item}>
        <img src={icon2} alt="Boost" />
        <span>Boost</span>
      </button>
      <button className={styles.nav_item}>
        <img src={icon3} alt="Statistics" />
        <span>Statistics</span>
      </button>
      <button className={styles.nav_item}>
        <img src={icon4} alt="Token" />
        <span>Token</span>
      </button>
    </div>
  );
};

export default Nav;
