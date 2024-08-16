import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function RegularCard({ css }) {
  return (
    <div>
      <span style={{ margin: '7px' }}>
        <Card className='card' style={css}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Card.Body>
            <span>Culture - Jul 5th '24</span>
            <Card.Title><h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-primary">More...</Button>
          </Card.Body>
        </Card>
      </span>
    </div>
  )
}
