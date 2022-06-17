import "./Form.css";
import React from "react";
import { useState } from "react"
import axios from "axios";
import swal from "sweetalert";
import Nav from "./Nav";
export default function Form(){

    //estados del formulario
    const [name,setName]=useState(false);
    const [company,setCompany]=useState(false);
    const [mail,setMail]=useState(false);
    const [message,setMessage]=useState(false);
    const [number,setNumber]=useState(false);
    const [file,setFile]=useState(false);
    const [formInfo,setFormInfo]=useState(false);
    const [text,setText]=useState("");

    //handlers de inputs 

    function nameHandler(e) {
        setName(e.target.value);
      }
      function companyHandler(e) {
        setCompany(e.target.value)
      }
      function messageHandler(e) {
        setMessage(e.target.value);
      }
      function mailHandler(e) {
        setMail(e.target.value);
      }
      function numberHandler(e) {
        setNumber(e.target.value);
      }
      function fileHandler(e) {
        setFile(e.target.files);
      }


    //funcion enviar del formulario 

    const send=async(e)=>{
        e.preventDefault();
        if (name.length>1) {
          if(mail.length>1){
            if(number.length>1){
              if(company.length>1){
                if(message.length>1){
                  console.log("recibiendo informacion")
                  try{console.log("enviando informacion...")
                      successButton()
                      await axios.post("http://localhost:8081/enviar",{name,company,mail,number,message,file}) }
                      catch(error){}
                    }
                else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
              }
              else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
            }
            else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
        }
        else{swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")}
        }
        else{
            swal("SOMETHING WENT WRONG", "Please complete all required fields before submit", "warning")
          //try{console.log("enviando informacion...")
          //await axios.post("https://whispering-depths-85783.herokuapp.com/enviar",{name,company,mail,number,message}) }
           //catch(error){}
        //}
        }
       
        
      }


      //funcion succes con alert

      function successButton(){
    
        swal("THANK YOU!", "Your message was sent successfully", "success")
        document.getElementById("form-reset").reset();
      }




    return <>
    
    <Nav/>

<div className="form" id="form-id">
        <div className="form-center">
        <div className="form-left">
        <div className="form-tex-left">
        <h2>We’d Love To Hear From You </h2>
        <p>Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality &amp; Same Day Response Guaranteed! </p>
        <p className="wn">What’s next?</p>
        <p>One of our Account Managers will contact you shortly</p>
        </div>

        </div>
        <div className="form-right">
        <form onSubmit={send} id="form-reset">
            <input type="text" placeholder="Your name*" id="name" onChange={nameHandler}/>
            <input type="email" placeholder="Work email*" onChange={mailHandler}/>
            <input type="number" placeholder="Mobile number*" onChange={numberHandler}/>
            <input type="text" placeholder="Company*" onChange={companyHandler}/> 
            <textarea placeholder="Your Message/Requirements" onChange={messageHandler}></textarea>
            {/*setFormInfo.length > 1? <h4>{setText}</h4>: console.log("final")  */}

           
            <p> Attach files Select files from your <span className="computer"><label htmlFor="pdf">Computer<input id="pdf" type="file" className="hidden" onChange={fileHandler}/></label></span> or <span className="google-docs">Google Docs</span> or <span className="dropbox">Dropbox URLs</span></p>
            <button type="submit" className="form-button" >ENQUIRE NOW</button>
          </form>

        

        </div>

        </div>
      </div>






      

      <div className="ubication">
        <div className="ubication-center">
        <div className="country">
        <p> SANTIAGO, CHILE <br/> Av. Irarrázaval 3661,Of. 201 Ñuñoa, ZIP 7550000 </p>
        </div>
        <div className="country">
        <p> FRISCO, USA <br/> 10601 Clarence Dr STE 250, Frisco, Texas, 75033</p>
        </div>
        <div className="country">
        <p> CÓRDOBA, ARGENTINA <br/> HUMBERTO PRIMO 630 <br/> CÓRDOBA CAPITAL X5000</p>
        </div>
        </div>
      </div>

    </>
}