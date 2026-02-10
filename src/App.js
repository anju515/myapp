import './App.css';
import Navbar from './component/Navbar.mjs';
import Textform from './component/Textform.js';

function App() {
  return (
    <>
    
   <Navbar title = "Techworld" home = "home"/>

  <br></br>
   <div className="container my-3= true"> 
    
   <Textform heading ="Explore your words" /></div>
  
   
   </>
  );
}

export default App;
