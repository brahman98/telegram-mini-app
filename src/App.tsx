import { observer } from "mobx-react-lite";
import appStore from "./stores/appStore";
import List from "./components/List";
import Modal from "./components/Modal";
import Energy from "./components/Energy";
import Info from "./components/Info";
import Nav from "./components/Nav";

const App = observer(() => {
  return (
    <div>
      <Energy />
      <Info />
      <List items={appStore.data} onItemClick={appStore.openModal} />
      {appStore.selectedItem && (
        <Modal item={appStore.selectedItem} onClose={appStore.closeModal} />
      )}
      <Nav />
    </div>
  );
});

export default App;
