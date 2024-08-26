import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard2 from '../Cards/LargeCard2';
import NewsList from '../NewsList';
import RegularCard from '../Cards/RegularCard';
import SmallCard from '../Cards/SmallCard';
import { Title } from '../Title'

export const RG4 = () => {
    return (
        <div>
            <Title title={"Sports"} />
            <Container>
                <Row>
                    <Col xxl={3}>
                        <div><NewsList/></div>
                    </Col>
                    <Col xxl={9}>
                        <Row><LargeCard2 /></Row>
                        <Row>
                            <Col lg={4}>
                                <RegularCard css={{ border: 'none' }} />
                                <hr />
                                <SmallCard />
                            </Col>
                            <Col><RegularCard css={{ border: 'none' }} /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
