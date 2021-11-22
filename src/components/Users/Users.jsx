import React from "react";
import s from "./Users.module.css"
import User from "./User";

const Users = (props) => {
    let usersElements = props.users.map( u => <User id={u.id} name={u.name} /> )
    return(
        <div className={s.users}>
           {usersElements}
        </div>
    )
}

export default Users;