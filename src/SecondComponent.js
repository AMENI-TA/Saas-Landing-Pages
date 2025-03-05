


import './SecondComponent.css';


export default function SecondComponent() {
   return(
<div className='SecondComponent'>
    <h1 id='title'> More than 25,000 teams use Collabs </h1>
    <span className='collabs'>
                <div  className='icons'> 
                    <img   src='/Unsplash.png'  alt='Unsplash' />
                   <b> Unsplash </b>
                </div>
                <div  className='icons'> 
                    <img id='notion'   src='/Notion.png'  alt='Notion' />
                    <b>Notion </b>
                </div>
                <div  className='icons'> 
                    <img    src='/intercom.png'  alt='intercom' />
                    <b>INTERCOM</b>
                </div>
                <div  className='icons'> 
                    <img    src='/descript.png'  alt='descript' />
                    <b>descript  </b>              </div>
                <div  className='icons'> 
                    <img  id='grammarly'  src='/grammarly.png'  alt='grammarly' />
                    <b>grammarly </b>
                </div>
                
</span>
</div>
   );
}