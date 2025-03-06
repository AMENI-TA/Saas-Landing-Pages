

import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent  from './ThirdComponent';
import FourthComponent  from './FourthComponent';
import FifthComponent from './FifthComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
       <h1>Biccas</h1>
       </div>

       <nav>
        <ul>Home</ul>
        <ul>Product</ul>
        <ul>FAQ</ul>
        <ul>Blog</ul>
        <ul>About Us</ul>
        </nav>

        <div>
        <ul>Login</ul>
        <button>Sign Up</button>
        </div>
      </header>

      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
      
    </div>
  );
}

export default App;
