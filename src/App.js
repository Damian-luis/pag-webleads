import React from "react";
import Home from "./componentes/Home";
import Calendly from "./componentes/Calendly";
import Form from "./componentes/Form";
import Nav from "./componentes/Nav";
import PrivacyPolicy from "./componentes/PrivacyPolicy";
import Footer from "./componentes/Footer";
import ScrollToTop from "./componentes/ScrollToTop";
import "./componentes/Nav.css"
import {
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  


  return (
    
    <div className="App">
      <ScrollToTop/>
      
      <Nav/>
      <Routes>
      
      
     

     

      <Route path="/" element={<Home/>} />
      <Route path="/book-a-call" element={<Calendly/>} />
      <Route path="/contact-us" element={<Form/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      {/*<Route path="https://webleadsgroup.com/book-a-call" element={<Calendly/>} />  */}
      
      
      </Routes>
     <Footer/>
    </div>
    
    
    
  );
}

export default App;
