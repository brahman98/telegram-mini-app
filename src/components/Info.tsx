import styles from "./Info.module.css";

const Info = () => {
  return (
    <>
      <h1>Information</h1>
      <section className={styles.info}>
        <div className={styles.info__part}>
          <div className={styles.info__part_key}>
            <p className={styles.margin_bottom}>Block</p>
            <p>Reward</p>
          </div>
          <div className={styles.info__part_value}>
            <p className={styles.margin_bottom}>12345</p>
            <p>624</p>
          </div>
        </div>
        <div className={styles.info__part}>
          <div className={styles.info__part_key2}>
            <p className={styles.margin_bottom}>Complexity</p>
            <p>Online</p>
          </div>
          <div className={styles.info__part_value}>
            <p className={styles.margin_bottom}>1.9K</p>
            <p>10K</p>
          </div>
        </div>
      </section>
      <section className={styles.info}>
        <div className={styles.info__part}>
          <div className={styles.info__part_key}>
            <p className={styles.margin_bottom}>Status</p>
            <p>Hashes</p>
          </div>
          <div className={styles.info__part_value}>
            <p className={`${styles.margin_bottom} ${styles.special_p}`}>
              Waiting
            </p>
            <p>0</p>
          </div>
        </div>
        <div className={styles.info__part}>
          <div className={styles.info__part_key2}>
            <p className={styles.margin_bottom}>Shares</p>
            <p>Income</p>
          </div>
          <div className={styles.info__part_value}>
            <p className={styles.margin_bottom}>0</p>
            <p>0</p>
          </div>
        </div>
      </section>
      <button className={styles.button}>Start mining</button>
    </>
  );
};

export default Info;
