import React from "react";
import s from "./Header.module.css"
import noTabLogo from "./../../images/noTabLogo.png"

type PropsType = {}

const Header:React.FC<PropsType> = () => {
    return(
        <div className={s.header}>
            <img src={noTabLogo}/>
            
        </div>
    )
}

export default Header;