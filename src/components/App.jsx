import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Section } from './Section';
import { ContactFilter } from './ContactFilter';
import { ContactList } from './ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(storedContacts);
  }, []);

  const saveContactsToLocalStorage = (newContacts) => {
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const onSubmitForm = contact => {
    if (contacts.some((el) => el.number === contact.number)) {
      alert(
        `This number (${
          contact.number
        }) is already in the contact list, recorded as ${
          contacts.find((el) => el.number === contact.number).name
        }`
      );
      return;
    }

    const newContact = { ...contact, id: 'id-' + nanoid() };

    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const onChange = filter => {
    setFilter(filter.toLowerCase());
  };

  const onDelete = id => {
    const updatedContacts = contacts.filter(e => e.id !== id);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={onSubmitForm} />
      </Section>
      <Section title={'Contacts'}>
        <ContactFilter onChange={onChange} />
        {contacts.length ? (
          <ContactList
            contacts={contacts.filter((el) =>
              el.name.toLowerCase().includes(filter)
            )}
            onDelete={onDelete}
          />
        ) : (
          <p>No contacts</p>
        )}
      </Section>
    </>
  );
};
