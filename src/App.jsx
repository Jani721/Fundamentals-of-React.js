import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import initialContacts from "./data/initialContacts";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(initialContacts);
  }, []);

  const addContact = (newContact) => {
    setContacts((previousContacts) => [
      ...previousContacts,
      newContact,
    ]);
  };

  const deleteContact = (id) => {
    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact.id !== id)
    );
  };

  const editContact = (id, updatedContact) => {
  setContacts((previousContacts) =>
    previousContacts.map((contact) =>
      contact.id === id
        ? { ...contact, ...updatedContact }
        : contact
    )
  );
};
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/add-contact"
            element={<AddContact addContact={addContact} />}
          />

          <Route
            path="/contacts"
            element={
              <ContactList
                contacts={contacts}
                deleteContact={deleteContact}
                editContact={editContact}
              />
            }
          />

          <Route
            path="/contacts/:id"
            element={<ContactDetails contacts={contacts} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;