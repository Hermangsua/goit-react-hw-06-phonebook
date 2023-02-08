import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // const [firstRenderCheck, setFlag] = useState(true);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (firstRenderCheck) {
  //     const contactsFromLocalStorage = localStorage.getItem('contactList');

  //     if (contactsFromLocalStorage !== 'undefined') {
  //       const parsedContacts = JSON.parse(contactsFromLocalStorage);

  //       if (parsedContacts) {
  //         setContacts(parsedContacts);
  //       }
  //     }
  //     setFlag(false);
  //   } else {
  //     localStorage.setItem('contactList', JSON.stringify(contacts));
  //   }
  // }, [contacts, firstRenderCheck]);

  // const handleChange = event => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };

  // const handleSubmit = event => {
  //   const id = nanoid();
  //   const name = event.name;
  //   const number = event.number;
  //   const contactsLists = [...contacts];

  //   if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     contactsLists.push({ name, id, number });
  //   }

  //   setContacts(contactsLists);
  // };

  // const handleDelete = event => {
  //   setContacts(contacts.filter(contact => contact.id !== event));
  // };

  // const getFilteredContacts = () => {
  //   const filterContactsList = contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });

  //   return filterContactsList;
  // };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
