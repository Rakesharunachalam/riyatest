import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 1200,
            once: false
});

//Separate component is created for Blog page using React Bootstrap cards and Aos animation is used
function Blog() {
  return (
<div className='blog' id='blog'>
  <div className='blog-tittle'>
    <h1>Our Blog</h1>
  </div>
  <div className='card-group'>
  <CardGroup data-aos="zoom-in-down" data-aos-delay="300" >
      <Card className='card1' >
        <Card.Img variant="top" src="/Images/blog3.jpg" />
        <Card.Body>
          <Card.Title>Salil Parekh is back?</Card.Title>
          <Card.Text>
          The board of IT services major Infosys has approved the reappointment of Salil Parekh as Chief Executive Officer (CEO) and Managing Director of the company for five more years, till March 31, 2027, according to a regulatory filing.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/Images/blog1.jpg"  />
        <Card.Body>
          <Card.Title>
Employee Spotlight</Card.Title>
          <Card.Text>
          A T‑Mobile technology expert shares her story of how the Navy prepared her for a career in technology, but not for the reality of her otherness as a Black woman in the field. Now, she's showing high school students what the next generation of tech leaders can look like.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/Images/blog2.jpg"  />
        <Card.Body>
          <Card.Title>Metro connects All IT Companies</Card.Title>
          <Card.Text>
          The Chennai Unified Metropolitan Transport Authority (CUMTA) is planning to conduct a preliminary feasibility assessment on executing the Lite Metro project in Chennai. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 week ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    
</div>

  )
}

export default Blog