import React from "react"
import { Link } from "react-router-dom";
const  Error = () => {

    return (
        <>
            <h2>We can't seem to find  you're looking for.</h2>
            <Link to="/">Go back to Main Page</Link>
        </>
    )
}

export default Error