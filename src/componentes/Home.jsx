import React from 'react'
import "./Home.css";
import { useEffect } from "react";
import Nav from "./Nav";
import Aos from "aos";
import "aos/dist/aos.css"
import { default as logo1 } from "../imagenes/Gradient01.svg";
import { default as logo2 } from "../imagenes/Gradient02.svg";
import { default as logo3 } from "../imagenes/Gradient03.svg";
import {Link} from "react-router-dom";
export default function Home(){

 useEffect(() => {
    Aos.init({duration:1000})
  },[]);



    return <>

   
    
      
    <div data-aos="zoom-in" className="presentation" id="home" >
      <span>#WeAreWebLeads</span>
      <h1> Software Development Outsourcing <br/>Services </h1>
      <p> Hire In-Demand Skills, On-Demand TM Web. Software, Mobile,DevOps and BlockChain. </p>
      <Link to="/book-a-call" className="first-button">SCHEDULE TIME TO TALK</Link> <br/>
      
      
      <Link to="/contact-us" className="presentation-final"> Or, Use this form to share your requirements.<br/> Get guaranteed response within 8 Hrs. </Link>
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
      <Link to="/contact-us" className="presentation-final"> Or, Use this form to share your requirements. Get guaranteed response within 8 Hrs. </Link>
      
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
      <Link to="/contact-us" className="presentation-final"> Or, Use this form to tell us about your needs.</Link>
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



       <h2 className="our-clients">Our clients</h2>
       <div className="carrusel">
      <div id="carouselExampleSlidesOnly" style={{width: "100%",
    display: "flex",
    justifyContent: "center"}} className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{width: "50%",display:"flex",padding:"50px"}}>
    <div  className="carousel-item active">
      <img  style={{width:"100%",height:"100px"}} className="d-block " src={require("../imagenes/mati.png")} alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img  style={{width:"100%",height:"100px"}} className="d-block " src={require("../imagenes/advanced.png")} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img style={{width:"100%",height:"100px"}} className="d-block " src={require("../imagenes/genesis.png")} alt="Third slide"/>
    </div>
    <div  className="carousel-item">
      <img style={{width:"30%",margin:"0 auto"}} className="d-block " src={require("../imagenes/kinetic.png")} alt="Third slide"/>
    </div>
  </div>
</div>  

</div>

    <div className="carrusel-desktop">
        <div className="carrusel-desktop-cards">
            
                <img src={require("../imagenes/advanced.png")} className="advanced"/>
                <img src={require("../imagenes/mati.png")} className="mati"/>
                <img src={require("../imagenes/genesis.png")} className="genesis"/>
                <img src={require("../imagenes/kinetic.png")} className="kinetic"/>
            
        </div>
    </div>

<img src={logo1} className="gradient4"/>
<div className="ourInfrastructure">
      <h2 className="ourInfrastructure-text">Our Infrastructure</h2>
      </div>
      

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


      
      
      
      </>
       

      
}