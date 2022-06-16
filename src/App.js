
import Home from "./componentes/Home";
import Calendly from "./componentes/Calendly";
import {
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  


  return (
    
    <div className="App">
      
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/book-a-call" element={<Calendly/>} />
      <Route path="https://webleadsgroup.com/book-a-call" element={<Calendly/>} />
      </Routes>
    </div>
    
    
    
  );
}

export default App;
