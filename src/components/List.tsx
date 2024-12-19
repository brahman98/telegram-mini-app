import styles from "./List.module.css";

type Item = {
  id: number;
  title: string;
  description: string;
};

type ListProps = {
  items: Item[];
  onItemClick: (item: Item) => void;
};

const List = ({ items, onItemClick }: ListProps) => {
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
            {/* {item.title} */}
            <div className={styles.item__left}>
              <p>#12344</p>
              <p>00:25 by Kate</p>
            </div>
            <div className={styles.item__right}>My reward: 0</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
