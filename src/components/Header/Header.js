import React from "react";
import logo from "../../assets/images/Group 67.png";
import headerClass from "./Header.module.scss";

const Header = (props) => {

    return (
        <>
            <header className={headerClass.headerWrapper}>
                <span className={headerClass.imgWrapper}>
                    <img src={logo} alt="Friender Logo"/> 

                </span>
            </header>
            
        </>
    );
}

export default Header;