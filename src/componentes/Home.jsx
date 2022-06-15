import React from 'react'
import "./Home.css";
import { useState,useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css"
import { default as logo1 } from "../imagenes/Gradient01.svg";
import { default as logo2 } from "../imagenes/Gradient02.svg";
import { default as logo3 } from "../imagenes/Gradient03.svg";
import Calendly from "./Calendly";
import {Link} from "react-router-dom";
export default function Home(){
    const [name,setName]=useState(false);
  const [company,setCompany]=useState(false);
  const [mail,setMail]=useState(false);
  const [message,setMessage]=useState(false);
  const [number,setNumber]=useState(false);
  const [formInfo,setFormInfo]=useState(false);
  const [text,setText]=useState("");
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
                  await axios.post("https://whispering-depths-85783.herokuapp.com/enviar",{name,company,mail,number,message}) }
                  catch(error){}
                }
            else{console.log("debe ingresar mensaje")}
          }
          else{console.log("debe ingresar el nombre de su compañia ")}
        }
        else{setText("debe ingresar un numero de telefono")}
    }
    else{setText("debe ingresar un correo electronico")}
    }
    else{
      setFormInfo(true)
      //try{console.log("enviando informacion...")
      //await axios.post("https://whispering-depths-85783.herokuapp.com/enviar",{name,company,mail,number,message}) }
       //catch(error){}
    //}
    }
   
    
  }
  function successButton(){
    
    swal("THANK YOU!", "Your message was sent successfully", "success")
    document.getElementById("form-reset").reset();
  }


  useEffect(() => {
    Aos.init({duration:1000})
  },[]);



    return <div>
    <nav>
        <a href="https://webleadsgroup.com/"><img src={require('../imagenes/logotipo.png')} alt="logo-webleads"/></a>
        <div className="links">
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#our-services">SERVICES</a></li>
            <li><a href="#form-id">CONTACT</a></li>
        </ul> </div>
      </nav>
      <div data-aos="zoom-in" className="presentation" id="home" >
      <span>#WeAreWebLeads</span>
      <h1> Software Development Outsourcing <br/>Services </h1>
      <p> Hire In-Demand Skills, On-Demand TM Web. Software, Mobile,DevOps and BlockChain. </p>
      <Link to="/book-a-call" className="first-button">SCHEDULE TIME TO TALK</Link>
      
      
      <a href="#form-id" className="presentation-final"> Or, Use this form to share your requirements.<br/> Get guaranteed response within 8 Hrs. </a>
      </div>

      <div  data-aos="fade-up" className="navecita"><img src={require('../imagenes/nave.png')} alt="navecita"/></div> 
<img src={logo1} className="gradient1"/>

      <div  data-aos="fade-up" className="our-services" id="our-services" >
        <h2>Our Services</h2>
        <p> WebLeads helps you adapt your company's business processes so that you can focus on what really matters to you. you can focus on what really matters to you, thus facilitating the achievement of your goals, adding value to your customers, and increasing the productivity of your resources. </p>
      </div>
      <div data-aos="fade-up" className="cards-services">
        <div className="card-services">
          <img src={require("../imagenes/icon1.png")}/>
          <h3>Software Development</h3>
          <p> We are an award-winning offshore web development company specializing in creating custom, scalable and secure software for various industries. With expertise in UI/UX, Mobile, SaaS, Web &amp; Cloud, we are your One-Stop Solution For All Your Software Design, Development, And Support Requirements. </p>
        </div>
        <div className="card-services">
        <img src={require("../imagenes/icon2.png")}/>
        <h3>Staff Augmentation</h3>
        <p> Looking for software engineers with a specific skill set to fill talent gaps? Our IT staff augmentation company can help you strike a perfect balance between project progress and cost-effectiveness. Build your team up and down with ease based on the current development needs. </p>
        </div>
        <div className="card-services">
        <img src={require("../imagenes/icon3.png")}/>
        <h3>Mobile App Development</h3>
        <p> Our developers build native or hybrid apps for iOS and Android using the latest tech stack. We have expertise in fintech, edtech, healthcare, streaming industries, and more. Hire developers with expertise in iOS, Android, Xamarin, Apache Cordova, PWA, React Native, Flutter, Ionic, and more. </p>
        </div>
        <img src={logo2} className="gradient2"/>
        <div className="text">
          <h2> Build Your Dedicated Team With Our Top Tech Skills </h2>
        </div>
      </div>
      <div className="mini-cards">
        <div className="center-mini-cards">
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/PHP.png")}/>
        <p> Hire developers deep expertise in LAMP, Laravel, Symfony, CodeIgniter, Yii, Zend, WordPress. Drupal or Magento. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/PYTHON.png")}/>
        <p> Get expertise in Core Python, Django, Flask, Microservices, Redis, AWS, Google Cloud, GraphQL, Hadoop, Hive and more. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/NODE.png")}/>
        <p> Node.js is a go-to choice for developers looking to build real-time, scalable apps and collaborative tools. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/NET.png")}/>
        <p> From mobile and web apps, desktop apps to microservices running on the cloud, .NET provides a solution for all. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/JAVA.png")}/>
        <p> Java is one of the most popular and influential languages. It is considered the most secure and reliable due to its 25 yrs old history. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/RAILS.png")}/>
        <p> Ruby on Rails is especially relevant for startups building MVP because of its clear syntax and code reusing. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/REACT.png")}/>
        <p> React makes it painless to build interactive UIs, simple views, and component-based structures. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/ANGULAR.png")}/>
        <p> Angular is best for creating dynamic Single Page Applications (SPAs) - both on the web and mobile. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/VUE.png")}/>
        <p> Vue is a go-to choice for developing next-genapps that are small in size and yet robust. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/DEVOPS.png")}/>
        <p> Get expertise in Docker, Kubernetes, AWS, Azure, GCP, GitLab CI/CD, Jenkinsand more. </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/QATEST.png")}/>
        <p> Manual and automation software testing services, including functional testing, security testing, server-side testing, etc </p>
        </div>
        <div data-aos="flip-left" className="mini-card">
        <img src={require("../imagenes/MOBILE.png")}/>
        <p> Hire developers with expertise in iOS, Android,Xamarin, Apache Cordova, PWA, React Native,Flutter, Ionic, and more. </p>
        </div>
        </div>
      </div>
      <div className="three-steps">
      
      <div  className="three-steps-text">
      <Link to="/book-a-call" className="first-button">SCHEDULE TIME TO TALK</Link>
      <a href="#form-id" className="presentation-final"> Or, Use this form to share your requirements. Get guaranteed response within 8 Hrs. </a>
      
      <h2 data-aos="flip-down">3 Steps To Hire Your Remote Developer</h2>
      <img src={require("../imagenes/linea.png")}/>
      </div>
      <div className="three-steps-cards">
        <div data-aos="flip-left" className="three-steps-card">
        <img src={require("../imagenes/rd-icon1.png")}/>
        <h3>Schedule a Call</h3>
        <p>Set up an initial call with our expertsto discuss your needs.</p>
        </div>
        <div data-aos="flip-left" className="three-steps-card">
        <img src={require("../imagenes/rd-icon2.png")}/>
        <h3>Choose Your Team</h3>
        <p> Screen and interview the best-fit remote developers from our talent pool. </p>
        </div>
        <div data-aos="flip-left" className="three-steps-card">
        <img src={require("../imagenes/rd-icon3.png")}/>
        <h3>Hire and Get Started</h3>
        <p>Onboard your team and get started with your project.</p>
        </div>
      </div>
      </div>

      <div className="industry-experience">
      <Link to="/book-a-call" className="first-button">BOOK A CALL</Link>
      <a href="#form-id" className="presentation-final"> Or, Use this form to tell us about your needs.</a>
      <h2>Industry Experience</h2>
      <p>Our team is specialized in a wide array of industry verticals</p>
      </div>

      <div className="cards-experience">
      <div data-aos="zoom-in" className="card-experience">
      <img className="img1" src={require("../imagenes/01.png")}/>
      </div>
      
      <div data-aos="zoom-in" className="card-experience">
      <img className="img3" src={require("../imagenes/03.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img2" src={require("../imagenes/02.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img4" src={require("../imagenes/04.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img5" src={require("../imagenes/05.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img6" src={require("../imagenes/07.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img7" src={require("../imagenes/06.png")}/>
      </div>
      <img src={logo3} className="gradient3"/>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img8" src={require("../imagenes/08.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img9" src={require("../imagenes/09.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img10" src={require("../imagenes/10.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img11" src={require("../imagenes/11.png")}/>
      </div>
      <div data-aos="zoom-in" className="card-experience">
      <img className="img12" src={require("../imagenes/12.png")}/>
      </div>
      </div>



      {/* <h2 className="our-clients">Our clients</h2>
      <div id="carouselExampleSlidesOnly" style={{width: "100%",
    display: "flex",
    justifyContent: "center"}} className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{width: "50%",display:"flex",padding:"50px"}}>
    <div  className="carousel-item active">
      <img  style={{width:"100%",height:"100px"}} className="d-block " src={require("./imagenes/mati.png")} alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img  style={{width:"100%",height:"100px"}} className="d-block " src={require("./imagenes/advanced.png")} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img style={{width:"100%",height:"100px"}} className="d-block " src={require("./imagenes/genesis.png")} alt="Third slide"/>
    </div>
    <div  className="carousel-item">
      <img style={{width:"30%",margin:"0 auto"}} className="d-block " src={require("./imagenes/kinetic.png")} alt="Third slide"/>
    </div>
  </div>
</div>  

  */}


<img src={logo1} className="gradient4"/>
      <h2 className="ourInfrastructure">Our Infrastructure</h2>

      

      <div className="long-cards">
        <div data-aos="zoom-in-up" className="long-card">
        <img src={require("../imagenes/long-card1.png")}/>
        <h3>Central Office in Argentina &amp; Chile</h3>
        </div>
        <div data-aos="zoom-in-up" className="long-card">
        <img src={require("../imagenes/long-card2.png")}/>
        <h3>Headquarters in USA</h3>
        </div>
        <div data-aos="zoom-in-up" className="long-card">
        <img src={require("../imagenes/long-card3.png")}/>
        <h3> Remote Operation in different places of the world </h3>
        </div>
      </div>

      <div className="form" id="form-id">
        <div className="form-left">
        <h2>We’d Love To Hear From You </h2>
        <p>Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality &amp; Same Day Response Guaranteed! </p>
        <p className="wn">What’s next?</p>
        <p>One of our Account Managers will contact you shortly</p>
        </div>
        <div className="form-right">
        <form onSubmit={send} id="form-reset">
            <input type="text" placeholder="Your name*" id="name" onChange={nameHandler}/>
            <input type="email" placeholder="Work email*" onChange={mailHandler}/>
            <input type="number" placeholder="Mobile number*" onChange={numberHandler}/>
            <input type="text" placeholder="Company*" onChange={companyHandler}/> 
            <textarea placeholder="Your Message/Requirements" onChange={messageHandler}></textarea>
            {/*setFormInfo.length > 1? <h4>{setText}</h4>: console.log("final")  */}

           
{setFormInfo===true?<p>Inggee vales</p>:<p>Nad aui</p>}
            <p> Attach files Select files from your <span className="computer">Computer</span> or <span className="google-docs">Google Docs</span> or <span className="dropbox">Dropbox URLs</span></p>
            <button type="submit" className="first-button" >ENQUIRE NOW</button>
          </form>

          { 
          }

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
      
      <footer>
        <div className="footer-left">
        <p>© 2022 WebLeads. All rights reserved</p> <div className="div-social"><a href="https://www.instagram.com/webleadsok/"><FaInstagramSquare className="social"/></a><a href="https://www.facebook.com/webleadsok"><FaFacebookF className="social"/></a><a href="https://ar.linkedin.com/company/webleadsok"><FaLinkedinIn className="social"/></a><a href="https://github.com/webleads-software"><FaGithubSquare className="social"/></a></div>
        </div>
        <div className="footer-right">
        <a href=""> Terms  &amp;  Conditions</a>
        |
        <a href="">Privacy Policy</a>
        </div>
        
      </footer>
      </div>
}