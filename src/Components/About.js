import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 1200,
            once: false
});
//Separate component is created for About page 
//Aos animation used
function About() {
  return (
    <div className='about' id='about' >
        <div className='left' data-aos="fade-right" data-aos-delay="300">
            <h2>WHY IS LOREM A LEADING SOFTWARE DEVELOPMENT COMPANIES IN CHENNAI?</h2>
            <br></br>
            <h5>Lorem Software Technologies Pvt.Ltd is a well-established 
                best software development company in Chennai 2023.
                 As a result, we offer custom software solutions to help 
                 our clients run their businesses more efficiently Mostly,
                  With the use of high-end tools and technologies, we offer 
                  lucrative custom software development solutions for clients.</h5>
                  <br></br>
                  <h6>✔ Develop webs, apps, game, cyber security testing, augmented reality 
                    and virtual reality, mixed reality, digital marketing, and business intelligence.<br></br><br></br><br></br>
✔ Furthermore, all of these services were provided at a very minimal cost.
<br></br><br></br><br></br>
✔ Aside from that, we are a software development company and love solving business problems.</h6>
        </div>
        <div className='right' data-aos="fade-down" data-aos-delay="400" >
            <img src="/Images/image1.png" alt='loading...'></img>
        </div>
    </div>
    
  )
  
}


export default About