import styles from "./Modal.module.css";

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
    <div className={styles.modal}>
      <div className={styles.in_modal}>
        <h2 className={styles.margin_bottom_40}>{item.title}</h2>
        <h1>Hash</h1>
        <p className={styles.modal__info}>{item.description}</p>
        <ul className={styles.modal__ul}>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Miner</p>
            <p className={styles.modal__right_p}>B</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Miner’s reward</p>
            <p className={styles.modal__right_p}>248.1</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Total number of&nbsp;users</p>
            <p className={styles.modal__right_p}>1785</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Share reward</p>
            <p className={styles.modal__right_p}>578.9</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>My reward</p>
            <p className={styles.modal__right_p}>0</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Date</p>
            <p className={styles.modal__right_p}>05.12.2024, 16:26:46</p>
          </li>
        </ul>
        <button
          className={styles.button}
          onClick={onClose}
        >
          OK
        </button>
        <div className={styles.closer} onClick={onClose}>
          <div className={styles.cross_line}></div>
          <div className={styles.cross_line}></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
