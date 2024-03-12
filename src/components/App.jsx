import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList className={styles.form} />
      </div>
    </div>
  );
};
