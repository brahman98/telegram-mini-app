import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.bottom_navigation}>
      <button className={styles.nav_item}>
        <img src="/img/icon1.png" alt="Mining" />
        <span>Mining</span>
      </button>
      <button className={styles.nav_item}>
        <img src="/img/icon2.png" alt="Boost" />
        <span>Boost</span>
      </button>
      <button className={styles.nav_item}>
        <img src="/img/icon3.png" alt="Statistics" />
        <span>Statistics</span>
      </button>
      <button className={styles.nav_item}>
        <img src="/img/icon4.png" alt="Token" />
        <span>Token</span>
      </button>
    </div>
  );
};

export default Nav;
