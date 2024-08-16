import React from 'react'
import Card from 'react-bootstrap/Card';
export default function SmallCard() {
    return (
        <div>
            <Card className='card' style={{ border: 'none' }}>
                <Card.Body>
                    <span>Culture - Jul 5th '24</span>
                    <Card.Title><h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}
