import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "";

const EntryList = ()=> {
const [entries, setEntries] = useState([])

useEffect(()=>{
    axios.get(`${API_URL}`)
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
                    <button style={buttonStyle}>editar</button>
                    <button style={buttonStyle}>delete</button>
                </div>
            )
        })}
    </div>
)
}

export default EntryList;