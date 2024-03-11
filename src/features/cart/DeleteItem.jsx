import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { daleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="small" onClick={() => dispatch(daleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
