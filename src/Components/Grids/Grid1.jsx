import React from 'react'
import LargeCard1 from '../Cards/LargeCard1'
import RegularCards from '../Cards/RegularCards'
import Trending from '../Trending'
import './Style.css'

function Grid1() {
    
  return (
    <>
      <div className='grid1' style={{
        display: 'grid',
        rowGap: '5px',
        columnGap: '2px',
        gridTemplateColumns: '35vw 20vw 20vw auto',
        gridTemplateRows: '1000px',
        // gridTemplateAreas:"large1 regular trending regular"
      }}>
        <div className='largercard1' style={{gridRow:'1/3', margin: '2px 60px' }}><LargeCard1/></div>
        <div className='regular' style={{gridRow:'1/3',}}><RegularCards css={{ width: '18rem', border:'none' }}/></div>
        <div className='regular' style={{gridRow:'1/3'}}><RegularCards css={{ width: '18rem', border:'none' }}/></div>
        <div className='trending' style={{gridRow:'1/3'}}><Trending/></div>
      </div>
    </>
  )
}

export {Grid1}