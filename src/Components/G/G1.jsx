import React from 'react'
import './G.css'
import LargeCard1 from '../Cards/LargeCard1'
import RegularCards from '../Cards/RegularCards'
import Trending from '../Trending'

export const G1 = () => {
  return (
    <div className='g1'>
        <div className="largercard"><LargeCard1/></div>
        <div className="cards"><RegularCards css={{ width: '18rem', border:'none' }}/></div>
        <div className="cards"><RegularCards css={{ width: '18rem', border:'none' }}/></div>
        <div className="trending"><Trending/></div>
    </div>
  )
}
