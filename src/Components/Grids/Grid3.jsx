import React from 'react'
import NewsList from '../NewsList'
import LargeCard2 from '../Cards/LargeCard2'
import RegularCard from '../Cards/RegularCard'
import Card from 'react-bootstrap/Card';
import SmallCard from '../Cards/SmallCard';
import { Title } from '../Title';

function Grid3() {
  return (
    <>
    <Title title={'Education'}/>
      <div style={{
        display: 'grid',
        rowGap: '5px',
        columnGap: '2px',
        gridTemplateColumns: '25vw 25vw 25vw auto',
        gridTemplateRows: '500px 740px',
        // margin: '2px 45px'
      }}>
        <div style={{ gridRow: '1/3', margin: '2px 35px'  }}><NewsList /></div>
        <div style={{ gridColumn: '2/5' }}><LargeCard2 /></div>
        <div style={{ gridRow: '2/3' }}>
          <RegularCard css={{ width: '20rem', border: 'none' }} />
          <hr />
          <SmallCard/>
        </div>
        <div style={{ gridRow: '2/3', gridColumn: '3/5' }}><RegularCard css={{ width: '38rem', border: 'none' }} /></div>
      </div>
    </>
  )
}
export {Grid3}