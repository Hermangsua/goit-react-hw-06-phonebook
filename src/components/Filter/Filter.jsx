import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'components/redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};
