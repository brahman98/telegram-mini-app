import { useState } from 'react'
import List from './components/List'
import Modal from './components/Modal'
import './App.css';

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
      <section className="energy">
        <div className='energy__text'>
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
          <div className='info__part'>
            <div className='info__part_key'>
              <p className='margin-bottom'>Block</p> 
              <p>Reward</p>
            </div>
            <div className='info__part_value'>
              <p className='margin-bottom'>12345</p> 
              <p>624</p>
            </div>
          </div>
          <div className='info__part'>
            <div className='info__part_key2'>
              <p className='margin-bottom'>Complexity</p> 
              <p>Online</p>
            </div>
            <div className='info__part_value'>
              <p className='margin-bottom'>1.9K</p> 
              <p>10K</p>
            </div>
          </div>
      </section>
      <section className="info">
          <div className='info__part'>
            <div className='info__part_key'>
              <p className='margin-bottom'>Status</p> 
              <p>Hashes</p>
            </div>
            <div className='info__part_value'>
              <p className='margin-bottom special_p'>Waiting</p> 
              <p>0</p>
            </div>
          </div>
          <div className='info__part'>
            <div className='info__part_key2'>
              <p className='margin-bottom'>Shares</p> 
              <p>Income</p>
            </div>
            <div className='info__part_value'>
              <p className='margin-bottom'>0</p> 
              <p>0</p>
            </div>
          </div>
      </section>
      <button className="button">Start mining</button>

      <h1>Last blocks</h1>
      <List items={data} onItemClick={openModal} />
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default App;