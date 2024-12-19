import { useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import "./App.css";

import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';


type Item = {
  id: number;
  title: string;
  description: string;
};

const data: Item[] = [
  {
    id: 1,
    title: "Block #400442",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
  {
    id: 2,
    title: "Block #400442",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
  {
    id: 3,
    title: "Block #400442",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
  {
    id: 4,
    title: "Block #400442",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
  {
    id: 5,
    title: "Block #400442",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
];

function App() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (item: Item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div>
      <section className="energy">
        <div className="energy__text">
          <p>Energy</p>
          <p>950 / 1000 xp</p>
        </div>
        <div className="energy__range">
          <div className="energy__range_green"></div>
          <div className="energy__range_gray"></div>
        </div>
      </section>

      <h1>Information</h1>
      <section className="info">
        <div className="info__part">
          <div className="info__part_key">
            <p className="margin-bottom">Block</p>
            <p>Reward</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom">12345</p>
            <p>624</p>
          </div>
        </div>
        <div className="info__part">
          <div className="info__part_key2">
            <p className="margin-bottom">Complexity</p>
            <p>Online</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom">1.9K</p>
            <p>10K</p>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="info__part">
          <div className="info__part_key">
            <p className="margin-bottom">Status</p>
            <p>Hashes</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom special_p">Waiting</p>
            <p>0</p>
          </div>
        </div>
        <div className="info__part">
          <div className="info__part_key2">
            <p className="margin-bottom">Shares</p>
            <p>Income</p>
          </div>
          <div className="info__part_value">
            <p className="margin-bottom">0</p>
            <p>0</p>
          </div>
        </div>
      </section>
      <button className="button">Start mining</button>

      <h1>Last blocks</h1>
      <List items={data} onItemClick={openModal} />
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}

      <div className="bottom-navigation">
        <button className="nav-item">
          <img src={icon1} alt="Mining" />
          <span>Mining</span>
        </button>
        <button className="nav-item">
          <img src={icon2} alt="Boost" />
          <span>Boost</span>
        </button>
        <button className="nav-item">
          <img src={icon3} alt="Statistics" />
          <span>Statistics</span>
        </button>
        <button className="nav-item">
          <img src={icon4} alt="Token" />
          <span>Token</span>
        </button>
      </div>
    </div>
  );
}

export default App;
