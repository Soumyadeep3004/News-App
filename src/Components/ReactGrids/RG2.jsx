import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard2 from '../Cards/LargeCard2';
import NewsList from '../NewsList';
import RegularCard from '../Cards/RegularCard';
import SmallCard from '../Cards/SmallCard';
import { Title } from '../Title'
import axios from 'axios';
export const RG2 = () => {
    const [indiaNews, setIndiaNews] = useState();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=india&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((response) => {
            // console.log("india news > ",response.data.articles);
            setIndiaNews(response.data.articles);
        }).catch((err) => {
            console.error(err);
        })
    }, [])
    return (
        <div>
            <Title title={"India"} />
            <Container>
                <Row>
                    <Col xxl={9}>
                        <Row><LargeCard2 news={indiaNews}/></Row>
                        <Row>
                            <Col lg={4}>
                                <RegularCard css={{ border: 'none' }} news={indiaNews?.[1]}/>
                                <hr />
                                <SmallCard news={indiaNews?.[2]}/>
                            </Col>
                            <Col><RegularCard css={{ border: 'none' }} news={indiaNews?.[4]}/></Col>
                        </Row>
                    </Col>
                    <Col xxl={3}>
                        <div><NewsList news={indiaNews?.slice(5,10)}/></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// const styles = {
//     background: 'violet', border: '2px solid white'
// }