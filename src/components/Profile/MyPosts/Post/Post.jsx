import React from "react";
import s from "./Post.module.css"
import usersPhoto from "./../../../../images/usersPhoto.jpg"

const Post = (props) => {

    return(
        <div className={s.post}>
            <img src={usersPhoto} />
            {props.message}
            <div> 🤍 {props.likesCount}</div>
        </div>
    )
}

export default Post;