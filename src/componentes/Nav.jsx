import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";
export default function Nav(){

    return <><nav>
    <a href="https://webleadsgroup.com/"><img src={require('../imagenes/logotipo.png')} alt="logo-webleads"/></a>
    <div className="links">
    <ul>
        <li><Link to="/">HOME</Link></li>
        <li><a href="https://webleadsgroup.com/#our-services">SERVICES</a></li>
        <li><Link to="/contact-us">CONTACT</Link></li> 
    </ul> </div>
  </nav></>

}
