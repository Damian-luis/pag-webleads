import React from "react";
import { InlineWidget } from "react-calendly";
import "./Calendly.css";
import { default as logo1 } from "../imagenes/Gradient01.svg";
import { default as logo2 } from "../imagenes/Gradient02.svg";
export default function Calendly(){
    return <div className="calendly">
      
        {/* https://calendly.com/contact-thank-you-webleads */}
      <InlineWidget url="https://calendly.com/damian-luis-porta/prueba" />
      <img src={logo1} className="gradient1-calendly"/>
      <img src={logo2} className="gradient2-calendly"/> 

    </div>
}