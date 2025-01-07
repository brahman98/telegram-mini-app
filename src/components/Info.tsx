import styles from "./Info.module.css";
import { observer } from "mobx-react-lite";
import infoStore from "../stores/InfoStore";

const Info = observer(() => {
  const { block, reward, complexity, online } = infoStore;
  const { status, hashes, shares, income, toggleMining } = infoStore;

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
            <p className={styles.margin_bottom}>{block}</p>
            <p>{reward}</p>
          </div>
        </div>
        <div className={styles.info__part}>
          <div className={styles.info__part_key2}>
            <p className={styles.margin_bottom}>Complexity</p>
            <p>Online</p>
          </div>
          <div className={styles.info__part_value}>
            <p className={styles.margin_bottom}>{complexity}K</p>
            <p>{online}K</p>
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
              {status}
            </p>
            <p>{hashes}</p>
          </div>
        </div>
        <div className={styles.info__part}>
          <div className={styles.info__part_key2}>
            <p className={styles.margin_bottom}>Shares</p>
            <p>Income</p>
          </div>
          <div className={styles.info__part_value}>
            <p className={styles.margin_bottom}>{shares}</p>
            <p>{income}</p>
          </div>
        </div>
      </section>
      <button className={styles.button} onClick={() => toggleMining()}>
        {status === "Process" ? "Stop Mining" : "Start Mining"}
      </button>
    </>
  );
});

export default Info;
