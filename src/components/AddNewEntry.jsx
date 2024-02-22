import { useState, useEffect } from 'react';
import axios from 'axios';

//const API_URL = "http://localhost:5000";
function AddNewEntry() {
  const [type, setType] = useState(null);
  const [finance, setFinance] = useState([]);
  const [data_input, setDataInput] = useState("");
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [notes, setNotes] = useState("");

 /*  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.json())
      .then((data) => setFinance(data.finance));
      /* .catch((error) => console.error(error)); 
  }, []); */



  /*const handleTypeChange = (event) => {
    setType(event.target.checked ? event.target.value : null);
  }; //This will set the type state to the value of the checked radio button, or null if no radio button is checked. */


  const handleSubmit = (e) => {
    e.preventDefault();

    const reqBody = {
        id: Math.random().toString(16).slice(2),
        data_input, 
        input, 
        category, 
        value, 
        notes
    }

    axios.post('https://project2-json-server-backend.onrender.com/finance', reqBody)
          .then((response) => {
            console.log(response);
            setDataInput("");
            setInput("");
            setCategory("");
            setValue("");
            setNotes("");
    })
  }

  return (
    <div>
      <h2 style={{ border: '3px solid black', borderStyle: 'inset' }}>Add New Entry</h2>
      
      <form onSubmit={handleSubmit}
        /* event.preventDefault(); */

        /*const formData = new FormData(event.target);
        const newEntry = {
          id: Math.random().toString(16).slice(2),
          data_input: formData.get('date'),
          input: formData.get('type'),
          category: formData.get('category'),
          value: parseFloat(formData.get('amount')),
          notes: formData.get('description'),
        };

        setFinance([...finance, newEntry]);
        */

    /*     axios.post('http://localhost:5000', newEntry)
          .then((response) => {
            console.log(response);
            event.target.reset(); // reset the form
            setType(null);
          })
          .catch((error) => {
            console.error(error);
           
          });
      }} */>
        <label> Date </label>
        <input type="date" value={data_input} name="date" onChange={(e)=> setDataInput(e.target.value)}/>
        <br /><br />
        <p><label> Type: </label></p>
        <input type="radio" name="type" value="income" onChange={(e)=> setInput(e.target.value)} />
        <label> Income </label>
        <input type="radio" name="type" value="expenses"  onChange={(e)=> setInput(e.target.value)}/>
        <label> Expenses </label>

        <br /><br />
        {input === 'income' && (
          <>
            <label> Category: </label><br /><br />
            <input type="radio" name="category" value="salary" onChange={(e)=> setCategory(e.target.value)}/>
            <label> Salary </label>
            <input type="radio" name="category" value="otherincome" onChange={(e)=> setCategory(e.target.value)}/>
            <label> Other type of Income </label>
          </>
        )}
        {input === 'expenses' && (
          <>
            <label> Category: </label><br /><br />
            <input type="radio" name="category" value="healthcare" onChange={(e)=> setCategory(e.target.value)}/>
            <label> Healthcare 🚑 </label>
            <input type="radio" name="category" value="education" onChange={(e)=> setCategory(e.target.value)}/>
            <label> Education 📚 </label>
            <input type="radio" name="category" value="home" onChange={(e)=> setCategory(e.target.value)}/>
            <label> Home 🏠</label>
            <input type="radio" name="category" value="transportation" onChange={(e)=> setCategory(e.target.value)}/>
            <label> Car/Transportation 🚗 </label>
            <input type="radio" name="category" value="food"onChange={(e)=> setCategory(e.target.value)} />
            <label> Food 🍔 </label>
          </>
        )}
        <br /><br />
        <label> Amount (EUR €) </label><br />
        <input required type="number" value={parseFloat(value)}  name="amount" onChange={((e)=> setValue(parseFloat(e.target.value).toFixed(2)))}/>
        <br /><br />
        <label> Description </label><br />
        <textarea rows="4" cols="50" name="description" value={notes} onChange={(e)=>setNotes(e.target.value)} ></textarea>
        <br /><br />
        <button type="submit">Add entry</button>
      </form>

      {/* <h2>Current Finances - New entry</h2>
      <ul>
        {finance.map((entry) => (
          <li key={entry.id}>
            {entry.data_input} - {entry.input} - {entry.category} - {entry.value} - {entry.notes}
          </li>
        ))}
      </ul> */}
      
    </div>

  );
  
}

export default AddNewEntry;