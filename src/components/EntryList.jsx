import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';

const API_URL = "http://localhost:5000";
const EntryList = ()=> {
const [entries, setEntries] = useState([]);
const navigate = useNavigate();

const {id} = useParams

const deleteEntry = () => {
    axios
    .delete(`${API_URL}/finance/${id}`)
    .then(()=>{
        navigate("/entrylist");
    })
    .catch((error)=> console.log(error));
}

useEffect(()=>{
    axios.get(`${API_URL}/finance`)
    .then((response)=> setEntries(response.data))
    .catch((error)=> console.log(error))
}, []);



return (
    <div>
        {entries && entries.map((entry)=>{

const divStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
};

const buttonStyle = {
     marginRight: '5px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
};
            return(
                <div key={entry.id} style={divStyle}>
                    <h3>{entry.notes}</h3>
                    <h4>{entry.category}</h4>
                    <p>{entry.data_input}</p>
                    <span>{entry.value}</span>
                    {/* <button style={buttonStyle}>editar</button> */}
                    <button style={buttonStyle} onClick={() => deleteEntry(entry.id)}>delete</button>
                </div>
            )
        })}
    </div>
)
}

export default EntryList;