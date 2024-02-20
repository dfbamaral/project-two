import { useState } from 'react';


function AddNewEntry(){
    const [type, setType] = useState(null);
    const [categories, setCategories] = useState([]);
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        fetch('/categories.json')
          .then((response) => response.json())
          .then((data) => setCategories(data));
      }, []);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    useState(() => {
        fetch('/categories.json')
          .then((response) => response.json())
          .then((data) => setCategories(data))
      }, [])

    return (
        <div>
            <h2>Add New Entry</h2>
            <form onSubmit="">
                <label> Date </label>
                <input type="date" name="date" />
                <br/><br/>
                <p><label> Type: </label></p>
                <input type="radio" name="type" value="income" onChange={handleTypeChange} />
                <label for="income"> Income </label>
                <input type="radio" name="type" value="expenses" onChange={handleTypeChange} />
                <label for="expenses"> Expenses </label>
                <label> Category: </label>
                <br/><br/>
                {type === 'income' && (
                    <>
                    <label> Category: </label><br/><br/>
                        <input type="radio" name="category" value="salary" />
                        <label for="salary"> Salary </label>
                        <input type="radio" name="category" value="otherincome" />
                        <label for="otherincome"> Other type of Income </label>
                    </>
                )}
                {type === 'expenses' && (
                    <>
                    <label> Category: </label><br/><br/>
                        <input type="radio" name="category" value="healthcare" />
                        <label for="healthcare"> Healthcare </label>
                        <input type="radio" name="category" value="education" />
                        <label for="education"> Education </label>
                        <input type="radio" name="category" value="home" />
                        <label for="home"> Home </label>
                        <input type="radio" name="category" value="transportation" />
                        <label for="transportation"> Car/Transportation </label>
                        <input type="radio" name="category" value="food" />
                        <label for="food"> Food </label>
                    </>)}
                <br/><br/>
                <label> Amount </label><br/>
                <input type="number" step=".01" name="amount"/>
                <br/><br/>
                <label> Description </label><br/>
                <textarea rows="4" cols="50" name="description"></textarea>
                <br/><br/>
                <button type="submit">Add entry</button>
            </form>
  
        </div>
    )
}
export default AddNewEntry;

