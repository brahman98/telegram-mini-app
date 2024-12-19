type Item = {
  id: number;
  title: string;
  description: string;
};

type ModalProps = {
  item: Item;
  onClose: () => void;
};

const Modal = ({ item, onClose }: ModalProps) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        zIndex: 11
      }}
    >
      <div
        style={{
          backgroundColor: "#1a2027",
          padding: "20px 20px 40px",
          borderRadius: "8px",
          width: "100%",
          position: "relative",
          zIndex: 15,
        }}
      >
        <h2 className="margin-bottom-40">{item.title}</h2>
        <h1>Hash</h1>
        <p className="modal__info">{item.description}</p>
        <ul className="modal__ul">
          <li className="modal__li">
            <p className="modal__left_p">Miner</p>
            <p className="modal__right_p">B</p>
          </li>
          <li className="modal__li">
            <p className="modal__left_p">Miner’s reward</p>
            <p className="modal__right_p">248.1</p>
          </li>
          <li className="modal__li">
            <p className="modal__left_p">Total number of&nbsp;users</p>
            <p className="modal__right_p">1785</p>
          </li>
          <li className="modal__li">
            <p className="modal__left_p">Share reward</p>
            <p className="modal__right_p">578.9</p>
          </li>
          <li className="modal__li">
            <p className="modal__left_p">My reward</p>
            <p className="modal__right_p">0</p>
          </li>
          <li className="modal__li">
            <p className="modal__left_p">Date</p>
            <p className="modal__right_p">05.12.2024, 16:26:46</p>
          </li>
        </ul>
        <button className="button margin-bottom-0" onClick={onClose}>
          OK
        </button>
        <div className="closer" onClick={onClose}>
          <div className="cross-line"></div>
          <div className="cross-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
