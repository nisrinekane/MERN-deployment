import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = () => {
  const [pirates, setPirates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(res => { setPirates(res.data) })
      .catch(err => console.log(err))
  }, [])

  // delete
  const removeFromDom = pirateId => {
    setPirates(pirates.filter(pirate => pirate._id !== pirateId))
  }

  const deletePirate = (pirateId) => {
    axios.delete('http://localhost:8000/api/pirates/' + pirateId)
      .then(res => { removeFromDom(pirateId) })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Pirate Crew</h1>
      <button className='btn btn-primary'><Link to={"/new"} className="h2 text-primary">Add Pirate</Link></button>
          {pirates && pirates.map((pirate) => {
            return <div className='flexed' key={pirate._id} scope="row">
                <div>
                  <img src={pirate.image} alt="pirate image" />
                </div>
                <div>
                  <h2>{pirate.name}</h2>
                </div>
                <div>
                  <Link to={"/pirates/" + pirate._id}>
                    <button className="btn btn-primary">View Pirate</button>
                  </Link>
                </div>
                <div>
                  <button className='btn btn-danger' onClick={(e) => { deletePirate(pirate._id) }}>
                    Walk the 
                    Plank
                  </button>
                </div>
                
            </div>
          })}
  
    </div>
  )
}
export default List;