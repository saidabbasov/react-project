import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

type PropsType = {}

const Navbar:React.FC<PropsType> = () => {
    return(
        <div className={s.navbar}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/users">Users</NavLink></div>
        </div>
    )
}

export default Navbar;