import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import image from './subLogo.png'
export default function LargeCard2({ news }) {
    const data = news ? news[12] : undefined
    return (
        <a href={data?.url ? data.url :null}>
            <Container>
                <Row>
                    <Col lg={7}>
                        <img src={data?.urlToImage ? data.urlToImage : image} alt="image" style={{ width: '100%' }} />
                    </Col>
                    <Col lg={5}>
                        <Card style={{ border: 'none' }}>
                            <Card.Body>
                                <Card.Title><h3 style={{ fontSize: '35px' }}>{data?.title ? data.title :null}</h3>
                                </Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                    <p style={{ fontSize: '20px' }}>{data?.description ? data.description.slice(0,80) :null}...</p>
                                </Card.Text>
                                <span>{data?.author ? data.author :null}</span>
                            </Card.Body>
                            <Card.Body>
                                {/* <Card.Link href="#">
                                <Button variant="outline-primary">More...</Button>
                            </Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </a>
    )
}
