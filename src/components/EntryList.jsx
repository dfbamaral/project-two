
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
            return(
                <div key={entry.id}>
                    <h3>{entry.notes}</h3>
                    <h4>{entry.category}</h4>
                    <p>{entry.data_input}</p>
                    <span>{entry.value}</span>
                </div>
            )
        })}
    </div>
)
}

export default EntryList;