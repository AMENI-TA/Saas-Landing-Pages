import {BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './login.css';

export default function loginPage() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}




function Home(){

    const Navigate = useNavigate()
    return(
        <div>
         <button onClick={() => Navigate("/login")}> Login </button>
        </div>
    )
};

function Login() {
    return(
        <h1>LOGIN</h1>
    )
};
