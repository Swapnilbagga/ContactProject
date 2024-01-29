

import React, { useState } from 'react';

const ContactItem = ({ contact, onUpdateContact, onDeleteContact }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setUpdatedContact(contact);
  };

  const handleSaveEdit = () => {
    onUpdateContact(contact.id, updatedContact);
    setEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li>
      <div>
        {isEditing ? (
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updatedContact.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={updatedContact.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={updatedContact.phone}
                onChange={handleChange}
                required
              />
            </label>
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <div>
            <strong>{contact.name}</strong>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={handleEdit}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ContactItem;

