import { makeAutoObservable } from "mobx";

export type Item = {
  id: number;
  title: string;
  description: string;
  lastBlock: string;
};

class AppStore {
  miner = "B";
  minersReward = 248.1;
  totalNumberUsers = 1785;
  shareReward = 578.9;
  myReward = 0;
  date = "05.12.2024, 16:26:46";

  timeName = "00:25 by Kate";

  selectedItem: Item | null = null;
  data: Item[] = [
    {
      id: 1,
      title: "Block #400441",
      description:
        "123441234412344123441234412344123441234412344123441234412344123441234412344",
      lastBlock: "#12345",
    },
    {
      id: 2,
      title: "Block #400442",
      description: "223441234412344...",
      lastBlock: "#12344",
    },
    {
      id: 3,
      title: "Block #400443",
      description: "323441234412344...",
      lastBlock: "#12343",
    },
    {
      id: 4,
      title: "Block #400444",
      description: "423441234412344...",
      lastBlock: "#12342",
    },
    {
      id: 5,
      title: "Block #400445",
      description: "523441234412344...",
      lastBlock: "#12341",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedItem(item: Item | null) {
    this.selectedItem = item;
  }

  openModal = (item: Item) => this.setSelectedItem(item);
  closeModal = () => this.setSelectedItem(null);
}

const appStore = new AppStore();
export default appStore;
