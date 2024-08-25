import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard2 from '../Cards/LargeCard2';
import NewsList from '../NewsList';
import RegularCard from '../Cards/RegularCard';
import SmallCard from '../Cards/SmallCard';
import {Title} from '../Title'

export const RG2 = () => {
    return (
        <div>
<Title title={"Sports"}/>
        <Container>
            <Row>
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
                <Col xxl={3}>
                    <div style={{ height: '600px' }}><NewsList /></div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

// const styles = {
//     background: 'violet', border: '2px solid white'
// }