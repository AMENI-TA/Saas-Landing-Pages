import image from './img1.png';
import VectorImg from './VectorImg.png';
import playIcon from './playIcon.png';

import './FirstComponent.css';

export default function FirstComponent() {
    return(
        <div className='FirstComponent'> 

                <span>  
            <h1>
            We're here to Increase your Productivity
            </h1>

            <img id='Vector' src={VectorImg}  alt='VectorImg'  />

            <p>
            Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
            </p>

            <span className='button-icon'>
                <button> Try free trial </button>
                <div> 
                    <img  id='playIcon' src={playIcon}  alt='playIcon' />
                    View Demo
                </div>
            </span>
           
        </span>

        
            <img id='imageOne' src={image}  alt='IMAGE1'  />
       
        </div>
    );
}