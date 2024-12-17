import { useState } from 'react'
import List from './components/List'
import Modal from './components/Modal'

type Item = {
  id: number;
  title: string;
  description: string;
};

const data: Item[] = [
  { id: 1, title: 'Объект 1', description: 'Описание объекта 1' },
  { id: 2, title: 'Объект 2', description: 'Описание объекта 2' },
  { id: 3, title: 'Объект 3', description: 'Описание объекта 3' },
  { id: 4, title: 'Объект 4', description: 'Описание объекта 4' },
  { id: 5, title: 'Объект 5', description: 'Описание объекта 5' },
];

function App() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (item: Item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div>
      <h1>Список объектов</h1>
      <List items={data} onItemClick={openModal} />
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default App;