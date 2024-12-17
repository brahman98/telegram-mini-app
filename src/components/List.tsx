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
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemClick(item)} style={{ cursor: 'pointer' }}>
            {item.title}
          </li>
        ))}
      </ul>
    );
  };
  
  export default List;