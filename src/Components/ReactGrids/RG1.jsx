import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard1 from '../Cards/LargeCard1';
import RegularCards from '../Cards/RegularCards';
import Trending from '../Trending';


export const RG1 = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}><LargeCard1 /></Col>
                <Col lg={3}><RegularCards css={{ border: 'none'}} /></Col>
                <Col lg={3}><RegularCards css={{ border: 'none'}} /></Col>
                <Col lg={2}><Trending /></Col>
            </Row>
        </Container>
    )
}

const styles = {

    borderStyle: 'solid',
    borderWidth: "0px",
    borderLeftWidth: '2px',
    borderColor: '#E8DEDC'

}