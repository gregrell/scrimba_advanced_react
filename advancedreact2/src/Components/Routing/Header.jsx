import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <nav className="App-header">
                <p className="App-logo">Advanced React Course</p>
                <NavLink to="/" className={({isActive})=> isActive ? 'navlink active':'navlink'}>Home</NavLink>
                <NavLink to="/library" className={({isActive})=> isActive ? 'navlink active':'navlink'}>Library</NavLink>
            </nav>
        </>
    )
}