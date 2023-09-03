import React from "react";
import { Link } from "react-router-dom";

const Navbar= ()=>{
return (
    <navbar>
        <div className="left">
            <p>Dictionary App</p>
        </div>
        <div className="right">
            <Link to='/'>Home</Link>
            <Link to='/history'>History</Link>
        </div>
    </navbar>
)
}
export default Navbar