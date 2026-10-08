import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContact }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Name and phone number are required.");
      return;
    }

    const newContact = {
      ...formData,
      id: Date.now().toString(),
    };

    addContact(newContact);

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
    });

    navigate("/contacts");
  };

  return (
    <div>
      <h1>Add Contact</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Phone</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Address</label>
          <br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
