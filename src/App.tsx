import { observer } from "mobx-react-lite";
import React, { Suspense } from "react";
import appStore from "./stores/appStore";
import List from "./components/List";
import Energy from "./components/Energy";
import Info from "./components/Info";
import Nav from "./components/Nav";

// Lazy load Modal
const Modal = React.lazy(() => import("./components/Modal"));

const App = observer(() => {
  return (
    <div>
      <Energy />
      <Info />
      <List items={appStore.data} onItemClick={appStore.openModal} />

      {appStore.selectedItem && (
        <Suspense
          fallback={
            <div className="suspense">
              Loading...
            </div>
          }
        >
          <Modal item={appStore.selectedItem} onClose={appStore.closeModal} />
        </Suspense>
      )}

      <Nav />
    </div>
  );
});

export default App;
