function Home() {
  return (
    <div>
      <h1>Welcome to Contact App</h1>

      <p>
        This is a React single-page application for managing contacts.
      </p>

      <h2>Home</h2>
      <p>
        This page introduces the application and its different views.
      </p>

      <h2>Add Contact</h2>
      <p>
        Add a new contact by entering their name, phone number,
        email and address.
      </p>

      <h2>Contact List</h2>
      <p>
        View all existing contacts and newly added contacts.
        Each contact name links to its details.
      </p>

      <h2>Contact Details</h2>
      <p>
        View the complete information of a selected contact.
        This view uses a dynamic URL route with a contact ID.
      </p>
    </div>
  );
}

export default Home;