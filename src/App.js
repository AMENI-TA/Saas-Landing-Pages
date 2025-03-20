

import './App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import loginPage from './login';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent  from './ThirdComponent';
import FourthComponent  from './FourthComponent';
import FifthComponent from  './FifthComponent';
import SixthComponent from  './SixthComponent';
import FooterComponent from './FooterComponent';


function App() {
   /* const [activeIndex, setActiveIndex] = useState(null);
  const navItems = ["Home", "Product", "FAQ", "Blog", "About Us"];

  const [showForm, setShowForm] = useState(false); */
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
     <h1>Biccas</h1>
       </div>

       { /*  <nav>
       {navItems.map((item, index) => (
        <a
          key={index}
          href="#"
          onClick={() => setActiveIndex(index)}
          style={{
            color: activeIndex === index ? "black" : "#A6A6A6",
            fontWeight: activeIndex === index ? "bold" : "normal",
            padding: "10px",
            cursor: "pointer",
          }}
          >
             {item}
        </a>
      ))}

       
        </nav> */}
        
        <ul>  Login  </ul>

        { /*
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        {!showForm ? (

        <button 
         onClick={() => setShowForm(true)}
         style={{
           padding: "10px 20px",
           fontSize: "16px",
           cursor: "pointer",
           backgroundColor: "#007BFF",
           color: "white",
           border: "none",
           borderRadius: "5px",
         }}
        >
          Sign Up
          </button>
        ) : (
          <SignUpForm setShowForm={setShowForm} />
        )}
        </div> 
        */}

      </header>

      <loginPage/>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
      <SixthComponent/>
      <FooterComponent/>

    </div>
  );
}

 /*
function SignUpForm({ setShowForm }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Inscription</h2>
      <form>
        <input type="text" placeholder="Nom" style={inputStyle} required />
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="password" placeholder="Mot de passe" style={inputStyle} required />
        <button type="submit" style={buttonStyle}>S'inscrire</button>
      </form>
      <Link to="/signup">
      <button onClick={() => setShowForm(false)} style={{ ...buttonStyle, backgroundColor: "gray" }}>
        Retour
      </button>
      </Link>
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "10px",
  width: "80%",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  marginTop: "10px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

*/


export default App;
