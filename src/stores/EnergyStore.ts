import { makeAutoObservable } from "mobx";

class EnergyStore {
  currentXP = 750;
  maxXP = 1000;

  constructor() {
    makeAutoObservable(this);
  }

  increaseXP = (amount: number) => {
    if (this.currentXP >= 990) {
      throw new Error("Не получилось увеличить Energy!");
    }
    this.currentXP = Math.min(this.currentXP + amount, this.maxXP);
  };
}

const energyStore = new EnergyStore();
export default energyStore;
