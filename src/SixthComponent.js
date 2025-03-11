
import './SixthComponent.css';
import { Children } from 'react';




export default function SixthComponent(){

  let firstPrivileges =[<li>2 Users</li>,<li>"2 Files"</li>,<li>Public Share & Comments</li>,<li>Chat Support</li>, <li>New income apps</li>];
  let secondPrivileges =[<li>4 Users</li>,<li>"All apps"</li>,<li>Unlimited editable exports</li>,<li>Folders and collaboration </li>, <li>All incoming apps</li>];
  let thirdPrivileges =[<li>All the features of pro plan</li>,<li>Account success Manager</li>,<li>Single Sign-On (SSO) </li>, <li>Co-conception pogram</li>,<li>Collaboration-Soon</li>];

  return(
    <div className='SixthComponent'>
     <div className='title'>
        <h1>Choose Plan That's Right For You</h1>
        <p>Choose plan that works best for you, feel free to contact us</p>
      </div>
      <div className='buttons'> 
        <button id='whiteButton'>  Bil Monthly </button>
        <button id='greenButton'>  Bil Yearly</button>
      </div>
      <div className='articals'>
      <Articale  type='Free' comment='Have a go  and test your  superpowers' cost='0'  Privileges= {firstPrivileges} Button ='Signup for free' /> 
      <div  id='special-style'>
      <Articale  type='Pro' comment='Experiment the power of infinite possibilities' cost='8' Note='Save $50 a year'  Privileges={secondPrivileges}  Button ='Go to pro' /> 
      </div>
      <Articale  type='Business' comment='Have a go  and test your  Unveil new superpowers and join the Design Leaque' cost='16'  Privileges= {thirdPrivileges}  Button ='Go to Business'  /> 
      </div>


    </div>
  )
}







function Articale ({type, comment, cost,Note, Privileges,Button}) {

  

    return (
     
      <div className='Articale'>
        
       <h3> {type} </h3>
        <p> {comment}</p>
        <div>
        <b>{cost}$</b>
        <a> {Note} </a>
        <ul> {Privileges} <button> {Button} </button></ul>
  
        </div>
      
    </div>
    );
  }
  
  