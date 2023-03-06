import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/features/categories/categoriesSlice';

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <p>{categories}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </>
  );
}
