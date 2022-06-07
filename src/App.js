import "./App.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
function App() {
  const [name,setName]=useState("");
  const [company,setCompany]=useState("");
  const [mail,setMail]=useState("");
  const [message,setMessage]=useState("");
  const [number,setNumber]=useState("");
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
    try{console.log("enviando informacion...")
      await axios.post("https://whispering-depths-85783.herokuapp.com/enviar",{name,company,mail,number,message})
      
    }
    catch(error){}
  }
  function successButton(){
    
    swal("Mensaje enviado con exito!", "Muchas gracias por comunicarte con Webleads ;)", "success")
    document.getElementById("fofi").reset();
  }
  return (
    <div className="App">
      <nav>
        <img src={require('./imagenes/logotipo.png')} alt="logo-webleads"/>
        <ul>
            <li>HOME</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
        </ul>
      </nav>
      <div className="presentation">
      <span>#WeAreWebLeads</span>
      <h1> Software Development Outsourcing <br/>Services </h1>
      <p> Hire In-Demand Skills, On-Demand TM Web. Software, Mobile,DevOps and BlockChain. </p>
      <a href="#" className="first-button">SCHEDULE TIME TO TALK </a>
      <a href="#" className="presentation-final"> Or, Use this form to share your requirements. Get guaranteed response within 8 Hrs. </a>
      </div>
      <div className="our-services">
        <h2>Our Services</h2>
        <p> WebLeads helps you adapt your company's business processes so that you can focus on what really matters to you. you can focus on what really matters to you, thus facilitating the achievement of your goals, adding value to your customers, and increasing the productivity of your resources. </p>
      </div>
      <div className="cards-services">
        <div className="card-services">
          <img src={require("./imagenes/icon1.png")}/>
          <h3>Software Development</h3>
          <p> We are an award-winning offshore web development company specializing in creating custom, scalable and secure software for various industries. With expertise in UI/UX, Mobile, SaaS, Web &amp; Cloud, we are your One-Stop Solution For All Your Software Design, Development, And Support Requirements. </p>
        </div>
        <div className="card-services">
        <img src={require("./imagenes/icon2.png")}/>
        <h3>Staff Augmentation</h3>
        <p> Looking for software engineers with a specific skill set to fill talent gaps? Our IT staff augmentation company can help you strike a perfect balance between project progress and cost-effectiveness. Build your team up and down with ease based on the current development needs. </p>
        </div>
        <div className="card-services">
        <img src={require("./imagenes/icon3.png")}/>
        <h3>Mobile App Development</h3>
        <p> Our developers build native or hybrid apps for iOS and Android using the latest tech stack. We have expertise in fintech, edtech, healthcare, streaming industries, and more. Hire developers with expertise in iOS, Android, Xamarin, Apache Cordova, PWA, React Native, Flutter, Ionic, and more. </p>
        </div>
        <div className="text">
          <h2> Build Your Dedicated Team With Our Top Tech Skills </h2>
        </div>
      </div>
      <div className="mini-cards">
        <div className="mini-card">
        <img src={require("./imagenes/PHP.png")}/>
        <p> Hire developers deep expertise in LAMP, Laravel, Symfony, CodeIgniter, Yii, Zend, WordPress. Drupal or Magento. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/PYTHON.png")}/>
        <p> Get expertise in Core Python, Django, Flask, Microservices, Redis, AWS, Google Cloud, GraphQL, Hadoop, Hive and more. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/NODE.png")}/>
        <p> Node.js is a go-to choice for developers looking to build real-time, scalable apps and collaborative tools. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/NET.png")}/>
        <p> From mobile and web apps, desktop apps to microservices running on the cloud, .NET provides a solution for all. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/JAVA.png")}/>
        <p> Java is one of the most popular and influential languages. It is considered the most secure and reliable due to its 25 yrs old history. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/RAILS.png")}/>
        <p> Ruby on Rails is especially relevant for startups building MVP because of its clear syntax and code reusing. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/REACT.png")}/>
        <p> React makes it painless to build interactive UIs, simple views, and component-based structures. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/ANGULAR.png")}/>
        <p> Angular is best for creating dynamic Single Page Applications (SPAs) - both on the web and mobile. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/VUE.png")}/>
        <p> Vue is a go-to choice for developing next-genapps that are small in size and yet robust. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/DEVOPS.png")}/>
        <p> Get expertise in Docker, Kubernetes, AWS, Azure, GCP, GitLab CI/CD, Jenkinsand more. </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/QATEST.png")}/>
        <p> Manual and automation software testing services, including functional testing, security testing, server-side testing, etc </p>
        </div>
        <div className="mini-card">
        <img src={require("./imagenes/MOBILE.png")}/>
        <p> Hire developers with expertise in iOS, Android,Xamarin, Apache Cordova, PWA, React Native,Flutter, Ionic, and more. </p>
        </div>
      </div>
      <div className="three-steps">
      <div className="three-steps-text">
      <a href="#" className="first-button">SCHEDULE TIME TO TALK </a>
      <a href="#" className="presentation-final"> Or, Use this form to share your requirements. Get guaranteed response within 8 Hrs. </a>
      <h2>3 Steps To Hire Your Remote Developer</h2>
      <img src={require("./imagenes/linea.png")}/>
      </div>
      <div className="three-steps-cards">
        <div className="three-steps-card">
        <img src={require("./imagenes/rd-icon1.png")}/>
        <h3>Schedule a Call</h3>
        <p>Set up an initial call with our expertsto discuss your needs.</p>
        </div>
        <div className="three-steps-card">
        <img src={require("./imagenes/rd-icon2.png")}/>
        <h3>Choose Your Team</h3>
        <p> Screen and interview the best-fit remote developers from our talent pool. </p>
        </div>
        <div className="three-steps-card">
        <img src={require("./imagenes/rd-icon3.png")}/>
        <h3>Hire and Get Started</h3>
        <p>Onboard your team and get started with your project.</p>
        </div>
      </div>
      </div>

      <div className="industry-experience">
      <a href="#" className="first-button">BOOK A CALL </a>
      <a href="#" className="presentation-final"> Or, Use this form to tell us about your needs.</a>
      <h2>Industry Experience</h2>
      <p>Our team is specialized in a wide array of industry verticals</p>
      </div>

      <div className="cards-experience">
      <div className="card-experience">
      <img src={require("./imagenes/01.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/02.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/03.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/04.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/05.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/06.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/07.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/08.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/09.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/10.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/11.png")}/>
      </div>
      <div className="card-experience">
      <img src={require("./imagenes/12.png")}/>
      </div>
      </div>

      <div className="section-carrusel">
      <h2>Our Clients</h2>
        <div className="carrusel"></div>
      </div>

      <h2 className="ourInfrastructure">Our Infrastructure</h2>

      <div className="long-cards">
        <div className="long-card">
        <img src={require("./imagenes/long-card1.png")}/>
        <h3>Central Office in Argentina &amp; Chile</h3>
        </div>
        <div className="long-card">
        <img src={require("./imagenes/long-card2.png")}/>
        <h3>Headquarters in USA</h3>
        </div>
        <div className="long-card">
        <img src={require("./imagenes/long-card3.png")}/>
        <h3> Remote Operation in different places of the world </h3>
        </div>
      </div>

      <div className="form">
        <div className="form-left">
        <h2>We’d Love To Hear From You </h2>
        <p>Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality &amp; Same Day Response Guaranteed! </p>
        <p className="wn">What’s next?</p>
        <p>One of our Account Managers will contact you shortly</p>
        <div className="fotos">
        <img src={require("./imagenes/imagenVendedor1.png")}/>
        <img src={require("./imagenes/imagenVendedor2.png")}/>
        </div>
        </div>

        <div className="form-right">
        <form onSubmit={send} id="fofi">
            <input type="text" placeholder="Your name*" id="name" onChange={nameHandler}/>
            <input type="email" placeholder="Work email*" onChange={mailHandler}/>
            <input type="number" placeholder="Mobile number*" onChange={numberHandler}/>
            <input type="text" placeholder="Company*" onChange={companyHandler}/> 
            <textarea placeholder="Your Message/Requirements" onChange={messageHandler}></textarea>
            <p> Attach files Select files from your <span className="computer">Computer</span> or <span className="google-docs">Google Docs</span> or <span className="dropbox">Dropbox URLs</span></p>
            <button type="submit" className="first-button" onClick={successButton}>ENQUIRE NOW</button>
          </form>
        </div>
      </div>

      <div className="ubication">
        <div className="ubication-center">
        <div className="country">
        <p> SANTIAGO, CHILE <br/> Av. Irarrázaval 3661,Of. 201 Ñuñoa, ZIP 7550000<br/> +56 2 2247-2156  </p>
        </div>
        <div className="country">
        <p> FRISCO, USA <br/> 10601 Clarence Dr STE 250, Frisco, Texas, 75033 <br/> (945) 424-1743 </p>
        </div>
        <div className="country">
        <p> CÓRDOBA, ARGENTINA <br/> HUMBERTO PRIMO 630 <br/> CÓRDOBA CAPITAL X5000 <br/> +54 (351) 811-2258 </p>
        </div>
        </div>
      </div>

      <footer>
        <div className="footer-left">
        <p>© 2022 WebLeads. All rights reserved</p>
        </div>
        <div className="footer-right">
        <a href=""> Terms &amp; Conditions</a>
        |
        <a href="">Privacy Policy</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
