import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getGadget, deleteGadget } from "../services/gadgets.js";

function gadgetDetail() {
  const [gadgetDetail, setGadgetDetail] = useState(null);
  const [toggle, setToggle] = useState(false)

  let { gadgetId } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    const fetchGadget = async () => {
      const gadgetData = await getGadget(gadgetId);
      setGadgetDetail(gadgetData);
    };

    fetchGadget();
  }, [gadgetId, toggle]);

  const handleDelete = async () => {
    await deleteGadget(gadgetId)
    navigate('/gadgets')
  }

  return (
    <div className="gadget-detail-root">
      <div className="gadget-detail-container">
        <img src={gadgetDetailAvatar} alt="gadget avatar" />
        <div>
          <h2>{gadgetDetail?.gadget?.name}</h2>
          <p>
            A {gadgetDetail?.gadget?.age} year old {gadgetDetail?.gadget?.breed} gadget
          </p>
          <p>{gadgetDetail?.gadget?.description}</p>
          <div>
            <Link to={`/gadgets/${gadgetDetail?.gadget?.id}/edit`}>
              <button className="gadget-detail-edit">Edit</button>
            </Link>
            <button className="gadget-detail-delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className="gadget-detail-bottom-container">
        <div className="feedings-container">
          <h2>Feedings</h2>
          <h3>Add a Feeding</h3>
          {gadgetDetail?.gadget?.fed_for_today ?
            <p>{gadgetDetail?.gadget?.name} has been fed all their meals today! 🥰</p> : <p>Looks like {gadgetDetail?.gadget?.name} is still hungry 😔</p>}
          <form onSubmit={handleFeedingSubmit}>
            <div>  
              <label htmlFor="feeding-date">Feeding Date: </label>
              <input
                type="date"
                name="date"
                id="feeding-date"
                value={feeding.date}
                onChange={handleDateAndMealChange}
              />
            </div>
            <div>
              <label htmlFor="feeding-meal">Meal: </label>
              <select
                name="meal"
                id="feeding-meal"
                value={feeding.meal}
                onChange={handleDateAndMealChange}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <button type="submit">Add Feeding</button>
          </form>
          <h3>Past Feedings</h3>
          <FeedingsTable feedings={gadgetFeedings} />
        </div>
        <div className="gadget-toys-container">
          <h2>Toys</h2>
          <h3>{gadgetDetail?.gadget?.name}'s Toys</h3>
          {gadgetDetail && gadgetDetail.gadget.toys.map((toy) => (
            <div key={toy.id} className="gadgets-personal-owned-toys">
              <div style={{ background: toy?.color }}></div>
              <p>A {toy.color} {toy.name}</p>
              <button onClick={() => handleRemoveToy(toy.id)}>Remove Toy</button>
            </div>
          ))}
          <h3>Available Toys</h3>
          {gadgetDetail && gadgetDetail?.toys_not_associated.map((toy) => (
            <div key={toy.id} className="gadgets-personal-toys">
              <div style={{ background: toy?.color }}></div>
              <p>A {toy.color} {toy.name}</p>
              <button onClick={() => handleAddToy(toy.id)}>Give Toy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default gadgetDetail;