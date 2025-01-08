import styles from "./List.module.css";
import { observer } from "mobx-react-lite";
import appStore from "../stores/appStore";
import { memo } from "react";

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

// Мемоизированный компонент для элемента списка
const ListItem = memo(({ item, onClick }: { item: Item; onClick: () => void }) => {
  const { myReward, timeName } = appStore;

  return (
    <li key={item.id} className={styles.item} onClick={onClick}>
      <div className={styles.item__left}>
        <p>{item.lastBlock}</p>
        <p>{timeName}</p>
      </div>
      <div className={styles.item__right}>My reward: {myReward}</div>
    </li>
  );
});

const List = observer(({ items, onItemClick }: ListProps) => {
  return (
    <>
      <h1>Last blocks</h1>
      <ul className={styles.list}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onClick={() => onItemClick(item)}
          />
        ))}
      </ul>
    </>
  );
});

export default List;
