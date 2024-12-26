import styles from "./Energy.module.css";

const Energy = () => {
  return (
    <section className={styles.energy}>
      <div className={styles.energy__text}>
        <p>Energy</p>
        <p>950 / 1000 xp</p>
      </div>
      <div className={styles.energy__range}>
        <div className={styles.energy__range_green}></div>
        <div className={styles.energy__range_gray}></div>
      </div>
    </section>
  );
};

export default Energy;
