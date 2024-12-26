import { useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import Energy from "./components/Energy";
import Info from "./components/Info";
import Nav from "./components/Nav";

type Item = {
  id: number;
  title: string;
  description: string;
};

const data: Item[] = [
  {
    id: 1,
    title: "Block #400441",
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
    title: "Block #400443",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
  {
    id: 4,
    title: "Block #400444",
    description:
      "123441234412344123441234412344123441234412344123441234412344123441234412344",
  },
  {
    id: 5,
    title: "Block #400445",
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
      <Energy />
      <Info />
      <List items={data} onItemClick={openModal} />
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
      <Nav />
    </div>
  );
}

export default App;
