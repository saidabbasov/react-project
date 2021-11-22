import React from "react";
import usersPhoto from "./../../images/usersPhoto.jpg"
import s from "./Users.module.css"

const User = (props) => {
    return(
        <div className={s.user}>
             <img src={usersPhoto} />
            {props.name}
            <div><button>Follow</button></div>
        </div>
    )
}

export default User;