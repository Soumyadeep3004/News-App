import React from 'react'
import LargeCard1 from '../Cards/LargeCard1'
import RegularCards from '../Cards/RegularCards'
import Trending from '../Trending'
import './Style.css'

function Grid1() {
    
  return (
    <>
      <div style={{
        display: 'grid',
        rowGap: '5px',
        columnGap: '2px',
        gridTemplateColumns: '35vw 20vw 20vw auto',
        gridTemplateRows: '500px 700px',
      }}>
        <div style={{gridRow:'1/3', margin: '2px 60px' }}><LargeCard1/></div>
        <div style={{gridRow:'1/3',}}><RegularCards css={{ width: '18rem', border:'none' }}/></div>
        <div style={{gridRow:'1/3'}}><RegularCards css={{ width: '18rem', border:'none' }}/></div>
        <div style={{gridRow:'1/3'}}><Trending/></div>
      </div>
    </>
  )
}

export {Grid1}