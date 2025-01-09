import { useState } from "react";
import styles from "./Energy.module.css";
import { observer } from "mobx-react-lite";
import energyStore from "../stores/EnergyStore";

const Energy = observer(() => {
  const { currentXP, maxXP} = energyStore;

  const [error, setError] = useState<Error | null>(null);

  const handleIncreaseXP = () => {
    try {
      energyStore.increaseXP(50);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }
  };

  if (error) {
    throw error;
  }

  return (
    <section className={styles.energy}>
      <div className={styles.energy__text}>
        <p>Energy</p>
        <p>{currentXP} / {maxXP} xp</p>
      </div>
      <div className={styles.energy__range}>
        <div className={styles.energy__range_green} style={{ width: `${(currentXP / maxXP) * 100}%` }}></div>
      </div>
      <button onClick={handleIncreaseXP} className={styles.button}>Gain XP</button>
    </section>
  );
});

export default Energy;
