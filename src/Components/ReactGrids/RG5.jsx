import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SmallCard2 } from '../Cards/SmallCard2'
import SmallCard from '../Cards/SmallCard'
import axios from 'axios';
export const RG5 = ({ cat }) => {

    const [catNews, setCatNews] = useState();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${cat}&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((response) => {
            console.log("cat news > ", response.data.articles);
            setCatNews(response.data.articles);
        }).catch((err) => {
            console.error(err);
        })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <SmallCard2 css={{ border: 'none' }} news={catNews?.[0]} />
                        <hr />
                        <SmallCard news={catNews?.[1]} />
                    </Col>

                    <Col lg={3}>
                        <SmallCard news={catNews?.[2]} />
                        <hr />
                        <SmallCard2 css={{ border: 'none' }} news={catNews?.[3]} />
                    </Col>

                    <Col lg={3}>
                        <SmallCard2 css={{ border: 'none' }} news={catNews?.[4]} />
                        <hr />
                        <SmallCard news={catNews?.[5]} />
                    </Col>

                    <Col lg={3}>
                        <SmallCard news={catNews?.[6]} />
                        <hr />
                        <SmallCard2 css={{ border: 'none' }} news={catNews?.[7]} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
