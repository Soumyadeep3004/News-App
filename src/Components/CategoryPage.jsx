import React from 'react'
import NavigationBar from './Navbar/NavigationBar'
import { CategoryCards } from './Cards/CategoryCards'
import { Footer } from './Footer'
import { RG5 } from './ReactGrids/RG5'
import { useParams } from 'react-router'
import { FiveLineTitle } from './FiveLineTitle'
import { Container, Row, Col } from 'react-bootstrap'

export const CategoryPage = () => {
  const { cat } = useParams();
  console.log(cat);
  console.log(typeof (cat));


  return (
    <div>
      <NavigationBar />
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display,serif',
          fontWeight: '900',
          color: 'rgba(154, 17, 17, 0.886)',
          fontSize: '60px'
        }}>{cat}</h1>
      </div>
      <RG5 cat={cat} />
      <div style={{ margin: '3% 3%' }}>
        <hr />
      </div>
      <div style={{margin:'50px 0'}}>
        <CategoryCards cat={cat} />
      </div>
      <Footer />
    </div>
  )
}
