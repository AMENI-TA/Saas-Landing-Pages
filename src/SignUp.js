
import { useNavigate } from 'react-router-dom';

import './SignUp.css';



export default function SignUp() {

    const navigate = useNavigate()
    return(
        <div className='signUp'>
        <div className='logininput'>

        <label> Name
        <input placeholder="Enter your name" />
        </label>

       
      <label> function
       <input placeholder="Enter your function" />
      </label>
      
      <label>Email
       <input placeholder="Enter your email" />
      </label>
      
      </div>
      <button id='savebutton'  onClick={() => navigate("/")}> <b>save informations</b> </button>
      </div>
    );
}






