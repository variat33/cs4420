import React from "react";
import '../components/NavBar.css'

function sayHello() {
    alert('You wish it worked!');
}

function NavBar() {
    return(
        <div className="NavBar">
            <span className="nav-logo">DB</span>
            <div className="nav-items">
                <a href="/home">Home</a>
            </div>
            <button onClick={sayHello} type="button" className="buttons">
                Upload Book
            </button>


        </div>
    )
}
export default NavBar;