import { useState, useEffect } from 'react';
import axios from 'axios';


function AddNewEntry() {
  const [type, setType] = useState(null);
  const [finance, setFinance] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((response) => response.json())
      .then((data) => setFinance(data.finance));
  }, []);

  const handleTypeChange = (event) => {
    setType(event.target.checked ? event.target.value : null);
  }; //This will set the type state to the value of the checked radio button, or null if no radio button is checked.

  return (
    <div>
      <h2>Add New Entry</h2>
      <form onSubmit={(event) => {
        /* event.preventDefault(); */

        const formData = new FormData(event.target);
        const newEntry = {
          id: Math.random().toString(16).slice(2),
          data_input: formData.get('date'),
          input: formData.get('type'),
          category: formData.get('category'),
          value: parseFloat(formData.get('amount')),
          notes: formData.get('description'),
        };

        setFinance([...finance, newEntry]);

        axios.post('http://localhost:5000', newEntry)
          .then((response) => {
            console.log(response);
            event.target.reset(); // reset the form
            setType(null);
          })
          .catch((error) => {
            console.error(error);
           
          });
      }}>
        <label> Date </label>
        <input type="date" name="date" />
        <br /><br />
        <p><label> Type: </label></p>
        <input type="radio" name="type" value="income" onChange={handleTypeChange} />
        <label htmlFor="income"> Income </label>
        <input type="radio" name="type" value="expenses" onChange={handleTypeChange} />
        <label htmlFor="expenses"> Expenses </label>

        <br /><br />
        {type === 'income' && (
          <>
            <label> Category: </label><br /><br />
            <input type="radio" name="category" value="salary" />
            <label htmlFor="salary"> Salary </label>
            <input type="radio" name="category" value="otherincome" />
            <label htmlFor="otherincome"> Other type of Income </label>
          </>
        )}
        {type === 'expenses' && (
          <>
            <label> Category: </label><br /><br />
            <input type="radio" name="category" value="healthcare" />
            <label htmlFor="healthcare"> Healthcare </label>
            <input type="radio" name="category" value="education" />
            <label htmlFor="education"> Education </label>
            <input type="radio" name="category" value="home" />
            <label htmlFor="home"> Home </label>
            <input type="radio" name="category" value="transportation" />
            <label htmlFor="transportation"> Car/Transportation </label>
            <input type="radio" name="category" value="food" />
            <label htmlFor="food"> Food </label>
          </>
        )}
        <br /><br />
        <label> Amount (EUR €) </label><br />
        <input type="number" step=".01" name="amount" />
        <br /><br />
        <label> Description </label><br />
        <textarea rows="4" cols="50" name="description"></textarea>
        <br /><br />
        <button type="submit">Add entry</button>
      </form>

      <h2>Current Finances - New entry</h2>
      <ul>
        {finance.map((entry) => (
          <li key={entry.id}>
            {entry.data_input} - {entry.input} - {entry.category} - {entry.value} - {entry.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddNewEntry;