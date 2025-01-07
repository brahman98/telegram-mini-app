import { makeAutoObservable } from "mobx";

class InfoStore {
  block = 12345;
  reward = 624;
  complexity = 1.9;
  online = 10;

  status = "Waiting";
  hashes = 0;
  shares = 0;
  income = 0;

  miningInterval: NodeJS.Timeout | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  toggleMining = () => {
    if (this.miningInterval) {
      this.stopMining();
    } else {
      this.startMining();
    }
  };

  startMining() {
    this.status = "Process";
    this.miningInterval = setInterval(() => {
      this.incrementMiningData();
    }, 2000);
  }

  stopMining() {
    if (this.miningInterval) {
      clearInterval(this.miningInterval);
      this.miningInterval = null;
      this.status = "Waiting";
    }
  }

  incrementMiningData() {
    this.block++;
    this.reward += 2;
    this.hashes++;
  }
}

const infoStore = new InfoStore();
export default infoStore;
