import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import "./Footer.css";
export default function Footer(){

    return <><footer>
    <div className="footer-left">
    <p>© 2022 WebLeads. All rights reserved</p> <div className="div-social"><a href="https://www.instagram.com/webleadsok/"><FaInstagramSquare className="social"/></a><a href="https://www.facebook.com/webleadsok"><FaFacebookF className="social"/></a><a href="https://ar.linkedin.com/company/webleadsok"><FaLinkedinIn className="social"/></a><a href="https://github.com/webleads-software"><FaGithubSquare className="social"/></a></div>
    </div>
    <div className="footer-right">
    <a href=""> Terms  &amp;  Conditions</a>
    |
    <a href="">Privacy Policy</a>
    </div>
    
  </footer> </>
}