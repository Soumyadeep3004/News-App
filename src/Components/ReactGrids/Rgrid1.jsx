import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard1 from '../Cards/LargeCard1';
import RegularCards from '../Cards/RegularCards';
import Trending from '../Trending'

export const Rgrid1 = () => {
    return (
        <Container>
            <Row>
                <Col xxl={3}><LargeCard1/></Col>
                <Col sm={3}><RegularCards/></Col>
                <Col sm={3}><RegularCards/></Col>
                <Col sm={3}><Trending/></Col>
            </Row>
            
        </Container>
    )
}
