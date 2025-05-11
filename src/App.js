


import './App.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './navbar';
import SignUp  from './SignUp';
import Home from './Home';
import SecondComponent from './SecondComponent';
import ThirdComponent  from './ThirdComponent';
import FourthComponent  from './FourthComponent';
import FifthComponent from  './FifthComponent';
import SixthComponent from  './SixthComponent';
import FooterComponent from './FooterComponent';
import PrincipalPage from './PrincipalPage';
import FreeTrial from './FreeTrial';


function AppWrapper() {
  
  return (
    <Router>
      <App />
    </Router>
  );
}


function App() {
  const location = useLocation();
  const path = location.pathname;
  const isMainPage = path === "/Home";

  
  return (

    <div className="App">
     
      <header className="App-header">
     
     <Navbar/>
     <Home/>
      </header>

      

      <Routes>
          <Route path="/signUp"  element={<SignUp />} />
          <Route path="/principalPage" element={<PrincipalPage/>} />
          <Route path="/freeTrial" element={<FreeTrial/>} />
      </Routes>
      <PrincipalPage/>
    
      
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
      <SixthComponent/>
      <FooterComponent/>
      
   
    </div>
  );
}

 

export default AppWrapper;
