// ContactList.js

import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onUpdateContact, onDeleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onUpdateContact={onUpdateContact}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
