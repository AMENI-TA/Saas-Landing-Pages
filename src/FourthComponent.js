

import './FourthComponent.css';

export default function FourthComponent() {
    return(
        <div className='FourthComponent'>
        
        <section  className='FirstFourthComponentPart' >

     <h1>Our Features you cab get</h1>
     <p>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
     <button>Get Started</button>
        </section>

        <section  className='SecondFourthComponentPart' >
        <div>
        <img  src='/CollborationTeams.png'   alt='CollborationTeams' />
    <h3> Collboration Teams </h3>
    <p>Here you can handle projects together with team virtually</p>
        </div>

        <div>
        <img  src='/CloudStorage.png'   alt='CloudStorage' />
    <h3> Cloud Storage</h3>
    <p>No nedd to worry about storage because we provide storage up to 2 TB</p>
        </div>

        <div>
        <img  src='/DailyAnalytics.png'   alt='DailyAnalytics' />
    <h3> Daily Analytics </h3>
    <p>We always provide useful informatin to make it easier for you every day</p>
       
</div>
</section>
       
        </div>
    );
}
