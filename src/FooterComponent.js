
import './FooterComponent.css';

export default function FooterComponent() {
    return(
     <div className='FooterComponent'>
        <div className='Container'>
<section className='partOne'>

<h1>People are Saying About DoWhith</h1>
<p>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
<div>
<img   src= '/twoBars.png'  alt='twoBars' />
</div>
<p>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
<p>_ Aria Zinanrio</p>
<div className='profiles'>
<img   src= '/profilOne.png'  alt='profilOne' />
<img   src= '/profilTwo.png'  alt='profilTwo' />
<img   src= '/profilThree.png'  alt='profilThree' />
<img   src= '/profilFour.png' alt='profilFour' />
<img   src= '/playbutton.png'  alt='playbutton' />

</div>
</section>

<section  className='partTwo'>
<div>
<img   src= '/euroImg.png'  alt='euroImg' />
</div>
<f3>Get Started</f3>
<div className='inputPlace'>
<a>Email
<input placeholder="Enter your email" />
</a>
<a>Message 
<input placeholder="What are you say ?" />
</a>
<button>Request Demo</button>
</div> 
<p id='specialStyle'>  <a id='otherColor'>or</a>  Start Free Trial</p>
</section>
</div>

     </div>
    ); 
}