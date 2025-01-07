import { makeAutoObservable } from "mobx";

class EnergyStore {
  currentXP = 750;
  maxXP = 1000;

  constructor() {
    makeAutoObservable(this);
  }

  increaseXP = (amount: number) => {
    this.currentXP = Math.min(this.currentXP + amount, this.maxXP);
  };
}

const energyStore = new EnergyStore();
export default energyStore;
