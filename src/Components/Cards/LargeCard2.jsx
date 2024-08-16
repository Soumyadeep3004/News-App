import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function LargeCard2() {
    return (
        <div style={{display:'flex',alignItems:'center'}} >
            <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" style={{ height: '400px', width: '600px' }} />
            <Card style={{ width: '18rem', border: 'none'}}>
                <Card.Body style={{width:'400px'}}>
                <span>Culture - Jul 5th '24</span>
                    <Card.Title><h3 style={{fontSize:'35px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis cum qui.</h3>
                    </Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        <p style={{fontSize:'20px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis pariatur quam exercitationem omnis autem, voluptate magnam cumque amet vel iusto est itaque enim quasi voluptatibus!</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">
                        <Button variant="outline-primary">More...</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
