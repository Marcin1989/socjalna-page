import React from "react";
import './Popup.css';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <button className="x" onClick={() => props.setPopupVisible(false)}>X</button>
               <h1>Log in</h1>            
               <input placeholder="Username"></input>
               <br></br>
               <input placeholder="Password"></input>
               <br></br>
               <button>Log in</button>
               <h1>Don`t have an account?<Link to = "/signup">Sign up</Link></h1>
               {props.childern}
            </div>
        </div>
    ): "";
}

export default Popup;