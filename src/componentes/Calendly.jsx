import React from "react";
import { InlineWidget } from "react-calendly";
import { default as logo1 } from "../imagenes/Gradient01.svg";
import { default as logo2 } from "../imagenes/Gradient02.svg";
import "./Calendly.css"
export default function Calendly(){
    return <div className="calendly">
      
      

      
    {/*<div className="calendly-inline-widget" data-url="https://calendly.com/julio-mayaudon/what-can-we-help-you-with" style={{minWidth:"320px",height:"630px"}}></div>  */}
      
    <img src={logo1} className="gradient1-calendly"/>
      <img src={logo2} className="gradient2-calendly"/>
      <InlineWidget url="https://calendly.com/julio-mayaudon/what-can-we-help-you-with?month=2022-06" />


      



    </div>
}


  {/* https://calendly.com/contact-thank-you-webleads */}
      {/*<InlineWidget url="https://calendly.com/julio-mayaudon/what-can-we-help-you-with?month=2022-06" />
      <img src={logo1} className="gradient1-calendly"/>
      <img src={logo2} className="gradient2-calendly"/>  */}
      