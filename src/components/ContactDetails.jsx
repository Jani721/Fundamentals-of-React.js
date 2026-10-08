import { Link, useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { id } = useParams();

  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return (
      <div>
        <h1>Contact Not Found</h1>
        <p>The requested contact does not exist.</p>

        <Link to="/contacts">Back to Contacts</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Contact Details</h1>

      <p>
        <strong>Name:</strong> {contact.name}
      </p>

      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>

      <p>
        <strong>Email:</strong> {contact.email}
      </p>

      <p>
        <strong>Address:</strong> {contact.address}
      </p>

      <Link to="/contacts">← Back to Contacts</Link>
    </div>
  );
}

export default ContactDetails;