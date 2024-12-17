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
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  