import styles from "./Energy.module.css";
import { observer } from "mobx-react-lite";
import energyStore from "../stores/EnergyStore";

const Energy = observer(() => {
  const { currentXP, maxXP, increaseXP } = energyStore;

  return (
    <section className={styles.energy}>
      <div className={styles.energy__text}>
        <p>Energy</p>
        <p>{currentXP} / {maxXP} xp</p>
      </div>
      <div className={styles.energy__range}>
        <div className={styles.energy__range_green} style={{ width: `${(currentXP / maxXP) * 100}%` }}></div>
      </div>
      <button onClick={() => increaseXP(10)} className={styles.button}>Gain XP</button>
    </section>
  );
});

export default Energy;
