import { useState } from 'react'
import List from './components/List'
import Modal from './components/Modal'

// import { useEffect } from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   // useEffect(() => {
//   //   const tg = window.Telegram.WebApp; // SDK
//   //   tg.ready(); // Сообщаем Telegram, что приложение готово
//   //   console.log("User:", tg.initDataUnsafe.user); // Доступ к данным пользователя
//   // }, []);

//   return (
//     <>
//       <div>
//         <h1>Hello Telegram Mini App</h1>
//       </div>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// --------------------------------

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