import React, { useEffect, useState } from "react"
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const API_URL = "https://project2-json-server-backend.onrender.com"

const Charts = () => {
  const [entries, setEntries] = useState([])
  //const [editingId, setEditingId] = useState(null)
  //const [editingEntry, setEditingEntry] = useState({ notes: '', category: '', data_input: '', value: '' })

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

  useEffect(() => {
    axios
      .get(`${API_URL}/finance`)
      .then((response) => setEntries(response.data))
      .catch((error) => console.log(error))
  }, [])

  // Group entries by category and sum values
  const entriesByCategory = entries.reduce((acc, entry) => {
    if (!acc[entry.category]) {
      acc[entry.category] = { name: entry.category, value: 0 };
    }
    acc[entry.category].value += parseFloat(entry.value);
    return acc;
  }, {});

  const data = Object.values(entriesByCategory);

  return (
    <div className="App">
      <div className="title">
        <h1>Graphic</h1>
      
      <div >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        
      </div>
      </div>
    </div>
  )
}

export default Charts