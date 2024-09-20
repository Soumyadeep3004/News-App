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


export const RG4 = () => {
    const [sportsNews,setSportsNews] = useState();
    
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((response)=>{
            // console.log("sports news> ",response.data.articles);
            setSportsNews(response.data.articles);
        }).catch((err)=>{
            console.error(err);    
        })
    },[])
    return (
        <div>
            <Title title={"Sports"} />
            <Container>
                <Row>
                    <Col xxl={3}>
                        <div><NewsList news={sportsNews?.slice(1, 6)} /></div>
                    </Col>
                    <Col xxl={9}>
                        <Row><LargeCard2 news={sportsNews}/></Row>
                        <Row>
                            <Col lg={4}>
                                <RegularCard css={{ border: 'none' }}  news={sportsNews?.[75]}/>
                                <hr />
                                <SmallCard  news={sportsNews?.[11]}/>
                            </Col>
                            <Col><RegularCard css={{ border: 'none' }}  news={sportsNews?.[36]}/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
