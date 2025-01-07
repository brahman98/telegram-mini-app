import styles from "./List.module.css";
import { observer } from "mobx-react-lite";
import appStore from "../stores/appStore";

type Item = {
  id: number;
  title: string;
  description: string;
  lastBlock: string;
};

type ListProps = {
  items: Item[];
  onItemClick: (item: Item) => void;
};

const List = observer(({ items, onItemClick }: ListProps) => {
  const { myReward, timeName } = appStore;

  return (
    <>
      <h1>Last blocks</h1>
      <ul className={styles.list}>
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            onClick={() => onItemClick(item)}
          >
            <div className={styles.item__left}>
              <p>{item.lastBlock}</p>
              <p>{timeName}</p>
            </div>
            <div className={styles.item__right}>My reward: {myReward}</div>
          </li>
        ))}
      </ul>
    </>
  );
});

export default List;
