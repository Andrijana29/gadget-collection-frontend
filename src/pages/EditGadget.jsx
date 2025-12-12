import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGadget, updateGadget } from "../services/gadgets.js";

function EditGadget() {
  let navigate = useNavigate();

  const [gadget, setGadget] = useState({
    name: "",
    image: "",
    type: "",
    description: "",
    userManual: "",
  });

  let { gadgetId } = useParams();

  useEffect(() => {
    const fetchGadget = async () => {
      const gadgetData = await getGadget(gadgetId);
      setGadget(gadgetData.gadget);
    };

    fetchGadget();
  }, [gadgetId]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setGadget((prevGadget) => ({
      ...prevGadget,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateGadget(gadgetId, gadget);
    navigate(`/gadgets/${gadgetId}`);
  };

  return (
    <div className="edit-gadget-root">
      <div className="edit-gadget-heading">
        <h2>Update {gadget.name}'s Info</h2>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
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

export default EditGadget;