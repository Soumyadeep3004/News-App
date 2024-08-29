import React from 'react'
import NavigationBar from './NavigationBar'
import { CategoryCards } from './CategoryCards'
import { Footer } from './Footer'
import { CategoricalImages } from './CategoricalImages'
import { Col, Container,Row } from 'react-bootstrap'

export const CategoryPage = ({cat}) => {
  return (
    <div>
        <NavigationBar/>
        <div style={{display:'flex',justifyContent:'center'}}>
            <h1>{cat}</h1>
        </div>
        <Container className='categoryImage'>
            <Row>
                <Col style={{padding:'8px'}} lg={6}><CategoricalImages/></Col>
                <Col style={{padding:'8px'}} lg={6}><CategoricalImages/></Col>
            </Row>
            <Row>
                <Col style={{padding:'8px'}} lg={3}><CategoricalImages/></Col>
                <Col style={{padding:'8px'}} lg={3}><CategoricalImages/></Col>
                <Col style={{padding:'8px'}} lg={3}><CategoricalImages/></Col>
                <Col style={{padding:'8px'}} lg={3}><CategoricalImages/></Col>
            </Row>
        </Container>
        <div style={{margin:'3% 3%'}}>
            <hr/>
        </div>
        <div>
            <h2 style={{margin:'2% 25%'}}>More stories from {cat}</h2>
        </div>
        <CategoryCards/>
        <Footer/>
    </div>
  )
}
