// App.js

import React, { useState } from 'react';
import ContactList from './contactList';
import AddContactForm from './AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const updateContact = (id, updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, ...updatedContact } : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contact Management System</h1>
      <AddContactForm onAddContact={addContact} />
      <ContactList
        contacts={contacts}
        onUpdateContact={updateContact}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
