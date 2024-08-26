import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function RegularCards({ css, ...others }) {
    const temp = [1, 2, 3]
    return (

            <span style={{ margin: '7px'}} {...others}>
                {
                    temp.map((val) => (
                        <Card key={val} className='card' style={css}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  style={{padding:'4px'}}/>
                            <Card.Body>
                                <span>Culture - Jul 5th '24</span>
                                <Card.Title><h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                                </Card.Title>
                                <Button variant="outline-primary">More...</Button>
                            </Card.Body>
                        </Card>
                    ))
                }

            </span>
    )
}
