import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getGadgets } from '../services/gadgets'

function Gadgets() {

  const [gadgets, setGadgets] = useState([])

  useEffect(() => {
    const fetchGadgets = async () => {
      const gadgetsData = await getGadgets()
      setGadgets(gadgetsData)
    }

    fetchGadgets()
  }, [])

  if (!gadgets.length) return <h1 style={{textAlign: "center"}}>Make sure to add some gadgets!</h1>

  return (
    <div className='gadgets-root'>
      <h1>Gadget List</h1>
      <div className="gadgets-container">
        {gadgets.length && gadgets.map((gadget) => (
          <div key={gadget.id} className="gadget-card">
              <h2>{gadget.name}</h2>
              <p>{gadget.image}</p>
              <p>{gadget.type}</p>
              <p>{gadget.description}</p>
              <p>{gadget.userManual}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Gadgets