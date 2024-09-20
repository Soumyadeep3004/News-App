import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import image from './subLogo.png'

export default function LargeCard1({news}) {
    // console.log("news> " ,news);
    // const data = news && news[0]
    const data = news ? news[0] : undefined
    // console.log(data);
    
    return (
        <a href={data?.url ? data.url :null}>
        <span style={{margin:'7px'}}>
            <Card className='card' style={{ border:'none'}}>
                <Card.Img variant="top" src={data?.urlToImage ? data.urlToImage : image} style={{padding:'4px'}}/>
                <Card.Body>
                    <Card.Title><h2 style={{fontSize:'35px'}}>{data?.title ? data.title :null}</h2>
                    </Card.Title>
                    <Card.Text>
                        {data?.description ? data.description :null}
                    </Card.Text>
                    <span>{data?.author ? data.author :null}</span>
                </Card.Body>
                <Card.Body>
                    {/* <Card.Link href="#">
                        <Button variant="outline-primary">More...</Button>
                    </Card.Link> */}
                </Card.Body>
            </Card>
        </span>
        </a>
    )
}
