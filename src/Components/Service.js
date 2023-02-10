import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 1200,
            once: false
});
//service section is created with help of react bootstrap and Aos Animation
function Service() {
  return (
    <div className='service' id='service' >
        <div className='service-tittle'>
        <h1>OUR SOFTWARE <span className='devlopment'>DEVELOPMENT SERVICES</span></h1>
        </div>
        <div className='service-text'>
            <p>Here at Lorem Software Technologies, our highly-skilled and 
               multi-talented personnel are proactive and diligent about every single detail.
                 As part of our software development services, we implement the following agile software
                 development methodologies to turn the customer’s vision into reality.</p>
        </div>
        <div className='service-cards'  >
        <Card style={{ width: '25rem' }} data-aos="flip-left" data-aos-delay="500">
      <Card.Img variant="top" src="/Images/pic1.jpg" />
      <Card.Body>
        <Card.Title>Web development</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Libero odit doloribus, accusantium optio autem, asperiores velit numquam 
                 assumenda neque sint illum cumque facere aliquam fuga eum. Nobis in placeat 
                 tempora.
        </Card.Text>
        <Button variant="primary">Read more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} data-aos="flip-up" data-aos-delay="500">
      <Card.Img variant="top" src="/Images/pic2.jpg" />
      <Card.Body>
        <Card.Title>App development</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Libero odit doloribus, accusantium optio autem, asperiores velit numquam 
                 assumenda neque sint illum cumque facere aliquam fuga eum. Nobis in placeat 
                 tempora.
        </Card.Text>
        <Button variant="primary">Read more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} data-aos="flip-right" data-aos-delay="500">
      <Card.Img variant="top" src="/Images/pic3.jpg" />
      <Card.Body>
        <Card.Title>Cyber Security texting</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Libero odit doloribus, accusantium optio autem, asperiores velit numquam 
                 assumenda neque sint illum cumque facere aliquam fuga eum. Nobis in placeat 
                 tempora.
        </Card.Text>
        <Button variant="primary">Read more..</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='service-cards1'>
        <Card style={{ width: '25rem' }} data-aos="flip-left" data-aos-delay="500">
      <Card.Img variant="top" src="/Images/pic4.jpg" />
      <Card.Body>
        <Card.Title>Game development</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Libero odit doloribus, accusantium optio autem, asperiores velit numquam 
                 assumenda neque sint illum cumque facere aliquam fuga eum. Nobis in placeat 
                 tempora.
        </Card.Text>
        <Button variant="primary">Read more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} data-aos="flip-up" data-aos-delay="500">
      <Card.Img variant="top" src="/Images/pic6.jpg" />
      <Card.Body>
        <Card.Title>3D development</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Libero odit doloribus, accusantium optio autem, asperiores velit numquam 
                 assumenda neque sint illum cumque facere aliquam fuga eum. Nobis in placeat 
                 tempora.
        </Card.Text>
        <Button variant="primary">Read more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} data-aos="flip-right" data-aos-delay="500">
      <Card.Img variant="top" src="/Images/pic5.jpg" />
      <Card.Body>
        <Card.Title>Digital Marketing</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Libero odit doloribus, accusantium optio autem, asperiores velit numquam 
                 assumenda neque sint illum cumque facere aliquam fuga eum. Nobis in placeat 
                 tempora.
        </Card.Text>
        <Button variant="primary">Read more..</Button>
      </Card.Body>
    </Card>

        </div>
    </div>
  )
}

export default Service