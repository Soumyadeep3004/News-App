import React from 'react'
import Card from 'react-bootstrap/Card';
export default function SmallCard({ news }) {
    const data = news ? news : undefined
    return (
        <a href={data?.url ? data.url : null}>
            <div>
                <Card className='card' style={{ border: 'none' }}>
                    <Card.Body>
                        <Card.Title><h4>{data?.title ? data.title : null}</h4>
                        </Card.Title>
                        <span>{data?.author ? data.author : null}</span>
                    </Card.Body>
                </Card>
            </div>
        </a>
    )
}
