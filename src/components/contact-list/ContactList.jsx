import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/slices/contactSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            onClick={() => dispatch(deleteContact(contact.id))}
            className={styles.contactsListBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
