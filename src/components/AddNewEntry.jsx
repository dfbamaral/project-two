import { useState } from "react";

function AddNewEntry(){

    return (
        <div>
            <h1>Add New Entry</h1>
            <form onSubmit="">
                <label> Date </label>
                <input type="date" name="date" value={date_input} />
                <br/><br/>
                <label> Type </label>
                <input type="radio" name="type" value="income" />
                <label for="income"> Income </label>
                <input type="radio" name="type" value="expenses" />
                <label for="expenses"> Expenses </label>
                <br/><br/>
                <label> Category </label>
                  {/* Salary, Other type of Income, Health Care, Education, Home, Car/Transportation, Food, Others*/}
                <input type="radio" name="category" value="salary" />
                <label for="salary"> Salary </label>
                <input type="radio" name="category" value="otherincome" />
                <label for="otherincome"> Other type of Income </label>
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
                <br/><br/>
                <label> Amount </label><br/>
                <input type="number" step=".01" name="amount"/>
                <br/><br/>
                <button type="submit">Add entry</button>
            </form>
  
        </div>
    )
}
export default AddNewEntry;

