import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Contact App</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/add-contact">Add Contact</Link>{" "}
        <Link to="/contacts">Contacts</Link>
      </div>
    </nav>
  );
}

export default Navbar;