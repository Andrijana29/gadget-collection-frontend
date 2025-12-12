import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGadget } from "../services/gadgets.js";

function CreateGadget() {
  let navigate = useNavigate();

  const [gadget, setGadget] = useState({
    name: "",
    image: "",
    type: "",
    description: "",
    userManual: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setGadget((prevGadget) => ({
      ...prevGadget,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createGadget(gadget);
    navigate("/gadgets");
  };

  return (
    <div className="create-gadget-root">
      <div className="create-gadget-heading">
        <h2>Add a Gadget</h2>
      </div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          name="name"
          value={gadget.name}
          onChange={handleChange}
          required
          autoFocus
        />
        <input
          className="input-image"
          placeholder="Image"
          name="image"
          value={gadget.image}
          onChange={handleChange}
          required
        />
        <textarea
          className="input-type"
          placeholder="Type"
          name="type"
          value={gadget.type}
          onChange={handleChange}
          required
          rows={1}
        />
        <textarea
          className="input-description"
          placeholder="Description"
          name="description"
          value={gadget.description}
          onChange={handleChange}
          required
          rows={5}
        />
        <textarea
          className="input-user-manual"
          placeholder="UserManual"
          name="userManual"
          value={gadget.userManual}
          onChange={handleChange}
          required
          rows={3}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateGadget;