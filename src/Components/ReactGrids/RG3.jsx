import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard1 from '../Cards/LargeCard1';
import RegularCards from '../Cards/RegularCards';
import RegularCard from '../Cards/RegularCard';
import NewsList from '../NewsList';
import { Title } from '../Title';
import axios from 'axios';
import SmallCard from '../Cards/SmallCard';

export const RG3 = () => {
  const [businessNews, setBusinessNews] = useState();

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=business&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((response) => {
      // console.log("business news > ", response.data.articles);
      setBusinessNews(response.data.articles);
    }).catch((err) => {
      console.error(err);
    })
  }, [])
  return (
    <>
      <Title title={"Business"} />
      <Container>
        <Row>
          <Col lg={4}><LargeCard1 news={businessNews} />
            <hr />
            <RegularCard css={{ border: 'none' }} news={businessNews?.[50]} />
          </Col>
          <Col lg={3}><RegularCards css={{ border: 'none' }} news={businessNews?.slice(4, 7)} /></Col>
          <Col lg={3}><RegularCards css={{ border: 'none' }} news={businessNews?.slice(11, 14)} /></Col>
          <Col lg={2}><NewsList news={businessNews?.slice(20, 25)} /></Col>
        </Row>
      </Container>
    </>
  )
}
