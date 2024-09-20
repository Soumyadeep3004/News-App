import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeCard1 from '../Cards/LargeCard1';
import RegularCards from '../Cards/RegularCards';
import Trending from '../Trending';
import axios from 'axios';


export const RG1 = () => {

    const [topHeadlines,setTopHeadlines] = useState();
    
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((response)=>{
            // console.log("headlines",response.data.articles);
            setTopHeadlines(response.data.articles);
        }).catch((err)=>{
            console.error(err);    
        })
    },[])


    return (
        <Container>
            <Row>
                <Col lg={4}><LargeCard1 news={topHeadlines} /></Col>
                <Col lg={3}><RegularCards css={{ border: 'none' }} news={topHeadlines?.slice(1,4)}/></Col>
                <Col lg={3}><RegularCards css={{ border: 'none' }} news={topHeadlines?.slice(15,18)}/></Col>
                <Col lg={2}><Trending news={topHeadlines?.slice(9,13)}/></Col>
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