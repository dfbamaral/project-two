import React, { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "https://project2-json-server-backend.onrender.com"

const EntryList = () => {
  const [entries, setEntries] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editingEntry, setEditingEntry] = useState({ notes: '', category: '', data_input: '', value: '' })

  const divStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  }

  const buttonStyle = {
    marginRight: "5px",
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  }

  const deleteEntry = (entryId) => {
    axios
      .delete(`${API_URL}/finance/${entryId}`)
      .then(() => {
        setEntries(entries.filter((entry) => entry.id !== entryId))
      })
      .catch((error) => console.log(error))
  }

  const editEntry = (entryId) => {
    setEditingId(entryId)
    const entryToEdit = entries.find((entry) => entry.id === entryId)
    setEditingEntry(entryToEdit)
  }

  const updateEntry = (entryId, updatedEntry) =>{
    axios
      .put(`${API_URL}/finance/${entryId}`, updatedEntry)
      .then(() => {
        setEntries(entries.map((entry) => (entry.id === entryId ? updatedEntry : entry)))
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/finance`)
      .then((response) => setEntries(response.data))
      .catch((error) => console.log(error))
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setEditingEntry({ ...editingEntry, [name]: value })
  }

  return (
    <div className="App"> 
      <h1 className="title">List of Results</h1>
      <div>
    <div className="wrapper">
      
      {entries &&
        entries.map((entry) => (
          <div key={entry.id} style={divStyle}>
            
            {editingId === entry.id ? (
              <>
              <h2 style={{ border: '2px solid black'}}>{entry.input}</h2>
              <h3>{entry.category}</h3>

                Note: 
                <input 
                  type="text"
                  name="notes"
                  value={editingEntry.notes}
                  onChange={handleInputChange}
                />
                <br></br>
              {/*   <input 
                  type="text"
                  name="category"
                  value={editingEntry.category}
                  onChange={handleInputChange}
                /> */}
                Date:
               <input 
                  type="date"
                  name="data_input"
                  value={editingEntry.data_input}
                  onChange={handleInputChange}
                /><br></br>
               Value: 
                <input 
                  type="number"
                  name="value"
                  value={editingEntry.value}
                  onChange={handleInputChange}
                />
                <br /><br />
                <button 
                  style={buttonStyle}
                  onClick={() => updateEntry(entry.id, editingEntry)}
                >
                  Atualizar
                </button>
              </>
            ) : (
              <>
                <h2 style={{ border: '2px solid black'}}>{entry.input}</h2>
                <h3>{entry.category}</h3>
                <h4>{entry.notes}</h4>
                <p>{entry.data_input}</p>
                <span>{entry.value} €</span>
                <br /><br />
                <button 
                  style={buttonStyle}
                  onClick={() => deleteEntry(entry.id)}
                ><img src="delete.png" width={25}height={25} />
                  
                </button>
                <button 
                  style={buttonStyle}
                  onClick={() => editEntry(entry.id)}
                ><img src="edit.png" width={25}height={25} />
                 
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EntryList