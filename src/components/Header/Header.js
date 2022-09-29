import React from "react";
import logo from "../../assets/Image/logosvg.svg";
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