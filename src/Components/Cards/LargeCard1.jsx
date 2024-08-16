import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function LargeCard1() {
    return (
        <span style={{margin:'7px'}}>
            <Card className='card' style={{ width: '26rem',border:'none'}}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                    <span>Culture - Jul 5th '24</span>
                    <Card.Title><h2 style={{fontSize:'35px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi </h2>
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et voluptate, magnam labore quo consequatur a laboriosam explicabo ex non tempore nulla, fugit rem perspiciatis ipsum error dolorum impedit. Enim veritatis voluptatem hic ipsam perspiciatis.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">
                        <Button variant="outline-primary">More...</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </span>
    )
}
