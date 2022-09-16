// display info of one pret and edit option
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const Detail = () => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/'+ id)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top" src={pirate.image} alt="pirate image" />
                    <h6 class="card-subtitle mb-2 text-muted">{pirate.catchPhrase}</h6>
                    <h3>Name: {pirate.name}</h3>
                    <h3>Position: {pirate.crewPosition}</h3>
                    <h3>Treasures: {pirate.chests}</h3>
                    <h3>Peg Leg: {pirate.pegLeg ? 'yes' : 'no'}</h3>
                    <h3>Eye Patch: {pirate.eyePatch ? 'yes' : 'no'}</h3>
                    <h3>Hook Hand: {pirate.hookHand ? 'yes' : 'no'}</h3>
                    
                </div>
            </div>
            <Link to={"/"} className="text-muted">Back Home</Link>
        </div>
    )
}
    
export default Detail;