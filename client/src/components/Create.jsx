import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    //keeps track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chests, setChests] = useState(0);
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("")
    // const [skills, setSkills] = useState(["", "", ""]);
    // errors
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/new", {
            name, image, chests, pegLeg, eyePatch, hookHand, catchPhrase, crewPosition
        })
            .then(res => navigate("/"))
            .catch(err => {
                // assign object of responses from the backend to a var
                const errorResponse = err.response.data.errors;
                // set array to push errors into it
                const errorArr = [];
                // loop through errors to get messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    // // check if checkbox is checked
    // const handleChange = event => {
    //     event.target.checked ? setIsOwned(true) : setIsOwned(false)
    // };

    // const handleSkillsChange = (e, idx) => {
    //     let tempArr = JSON.parse(JSON.stringify(skills));
    //     tempArr[idx] = e.target.value;
    //     setSkills(tempArr);
    // }

    //onChange to update name, price and description
    return (
        <div>
            <h1>Add Pirate</h1>
            <h6>
                <Link to={"/"} className="h2 text-primary">Crew Board</Link>
            </h6>
            {errors && errors.map((error, idx) => {
                return (
                    <p style={{ color: 'red' }} key={idx}>{error}</p>
                )
            })
            }
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Pirate Name</label><br />
                    <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    {name.length && name.length < 3 ? (<p style={{ color: 'red' }}>
                        name must be at least 3 characters</p>) : null}
                </p>                
                <p>
                    <label>Image Url</label><br />
                    <input className="form-control" type="text" onChange={(e) => setImage(e.target.value)} value={image} />
                    {image.length && image.length < 3 ? (<p style={{ color: 'red' }}>
                        image url must be at least 3 characters</p>) : null}
                </p>
                <p>
                    <label>Number of Chests</label><br />
                    <input className="form-control" type="number" onChange={(e) => setChests(e.target.value)} value={chests} />
                    {chests && chests < 0 ? (<p style={{ color: 'red' }}>
                        chests cannot be negative</p>) : null}
                </p>
                <p>
                    <label>Pirate Catch Phrase</label><br />
                    <input className="form-control" type="text" onChange={(e) => setCatchPhrase(e.target.value)} value={catchPhrase} />
                    {catchPhrase.length && catchPhrase.length < 3 ? (<p style={{ color: 'red' }}>
                        catch phrase must be at least 3 characters</p>) : null}
                </p> 
                <p>
                    <label>peg leg? &nbsp;</label>
                    <input type="checkbox"  onChange={(e) => setPegLeg(!pegLeg)} checked={pegLeg} />
                </p>
                <p>
                    <label>eye patch? &nbsp;</label>
                    <input type="checkbox"  onChange={(e) => setEyePatch(!eyePatch)} checked={eyePatch} />
                </p>
                <p>
                    <label>hook hand? &nbsp;</label>
                    <input type="checkbox"  onChange={(e) => setHookHand(!hookHand)} checked={hookHand} />
                </p>
                <select className="form-select" name="crewPosition" onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
                    <option value="captain">Captain</option>
                    <option value="firstMate">First Mate</option>
                    <option value="quarterMaster">Quarter Master</option>
                    <option value="powderMonkey">Powder Monkey</option>
                </select>
                <div>
                    <input className='btn' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Create