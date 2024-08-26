import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard1 from '../Cards/LargeCard1';
import RegularCards from '../Cards/RegularCards';
import NewsList from '../NewsList';
import { Title } from '../Title';

export const RG3 = () => {
  return (
    <>
      <Title title={"Business"} />
      <Container>
        <Row>
          <Col lg={4}><LargeCard1 /></Col>
          <Col lg={3}><RegularCards css={{ border: 'none' }} /></Col>
          <Col lg={3}><RegularCards css={{ border: 'none' }} /></Col>
          <Col lg={2}><NewsList /></Col>
        </Row>
      </Container>
    </>
  )
}
