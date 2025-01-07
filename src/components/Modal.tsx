import styles from "./Modal.module.css";
import { observer } from "mobx-react-lite";
import appStore from "../stores/appStore";

type Item = {
  id: number;
  title: string;
  description: string;
};

type ModalProps = {
  item: Item;
  onClose: () => void;
};

const Modal = observer(({ item, onClose }: ModalProps) => {
  const { miner, minersReward, totalNumberUsers, shareReward, myReward, date } = appStore;


  return (
    <div className={styles.modal}>
      <div className={styles.in_modal}>
        <h2 className={styles.margin_bottom_40}>{item.title}</h2>
        <h1>Hash</h1>
        <p className={styles.modal__info}>{item.description}</p>
        <ul className={styles.modal__ul}>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Miner</p>
            <p className={styles.modal__right_p}>{miner}</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Miner’s reward</p>
            <p className={styles.modal__right_p}>{minersReward}</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Total number of&nbsp;users</p>
            <p className={styles.modal__right_p}>{totalNumberUsers}</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Share reward</p>
            <p className={styles.modal__right_p}>{shareReward}</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>My reward</p>
            <p className={styles.modal__right_p}>{myReward}</p>
          </li>
          <li className={styles.modal__li}>
            <p className={styles.modal__left_p}>Date</p>
            <p className={styles.modal__right_p}>{date}</p>
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
});

export default Modal;
