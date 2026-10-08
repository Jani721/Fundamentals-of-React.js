import { useState } from "react";
import { Link } from "react-router-dom";

function ContactList({ contacts, deleteContact, editContact }) {
  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const startEditing = (contact) => {
    setEditingId(contact.id);

    setEditData({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = (id) => {
    editContact(id, editData);
    setEditingId(null);
  };

  return (
    <div>
      <h1>Contact List</h1>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div>
          {contacts.map((contact) => (
            <div key={contact.id}>
              {editingId === contact.id ? (
                <div>
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />

                  <input
                    name="phone"
                    value={editData.phone}
                    onChange={handleChange}
                  />

                  <input
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                  />

                  <input
                    name="address"
                    value={editData.address}
                    onChange={handleChange}
                  />

                  <button onClick={() => handleSave(contact.id)}>
                    Save
                  </button>

                  <button onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <Link to={`/contacts/${contact.id}`}>
                    {contact.name}
                  </Link>

                  <p>{contact.phone}</p>

                  <button onClick={() => startEditing(contact)}>
                    Edit
                  </button>

                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </div>
              )}

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;