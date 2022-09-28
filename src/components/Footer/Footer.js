import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import footerClass from "./Footer.module.scss"

const Footer = (props) => {
  return (
    <div className={footerClass.footerWrapper}>
    <p>Powered by<a href="#" target="_blank" >Tier5</a></p>
  </div>
  );
}

export default Footer;
