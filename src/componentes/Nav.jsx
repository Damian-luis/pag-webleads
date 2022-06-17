import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom";
export default function Nav(){

    return <nav>
    <a href="https://webleadsgroup.com/"><img src={require('../imagenes/logotipo.png')} alt="logo-webleads"/></a>
    <div className="links">
    <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#our-services">SERVICES</a></li>
        <li><Link to="/contact-us">CONTACT</Link></li> 
    </ul> </div>
  </nav>

}
