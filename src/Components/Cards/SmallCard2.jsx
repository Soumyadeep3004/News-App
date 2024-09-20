import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from './subLogo.png'
export const SmallCard2 = ({ css, news }) => {

    const data = news ? news : undefined

    return (
        <div>
            <a href={data?.url ? data.url : image}>
                <span style={{ margin: '7px' }}>
                    <Card className='card' style={css}>
                        <Card.Img variant="top" src={data?.urlToImage ? data.urlToImage : image} style={{ padding: '4px' }} />
                        <Card.Body>
                            <Card.Title><h4>{data?.title ? data.title : image}</h4>
                            </Card.Title>
                            <span>{data?.author ? data.author : image}</span>
                        </Card.Body>
                    </Card>
                </span>
            </a>
        </div>
    )
}
