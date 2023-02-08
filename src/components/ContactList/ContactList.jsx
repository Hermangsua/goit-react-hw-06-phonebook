import {
  deleteContact,
  getContacts,
  getFilter,
} from 'components/redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();
  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactListItem}>
            {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
