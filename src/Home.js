

import { useNavigate } from 'react-router-dom';

import './SignUp.css';




export default function Home() {

    const navigate = useNavigate()
    return(
        <div>
         <button onClick={() => navigate("/signUp")}> Sign Up </button>
        </div>
    );
}
