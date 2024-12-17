import styles from './List.module.css';

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
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item} onClick={() => onItemClick(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
