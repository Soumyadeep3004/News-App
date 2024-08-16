import React from 'react'
import LargeCard2 from '../Cards/LargeCard2'
import RegularCard from '../Cards/RegularCard'
import NewsList from '../NewsList'
import Card from 'react-bootstrap/Card';
import SmallCard from '../Cards/SmallCard';
import { Title } from '../Title';


function Grid2() {
  return (
    <>
    <Title title={'Sports'}/>
      <div style={{
        display: 'grid',
        rowGap: '5px',
        columnGap: '2px',
        gridTemplateColumns: '28vw 47vw auto',
        gridTemplateRows: '500px 750px',
      }} className="grid2">
        <div style={{ gridColumn: '1/3', margin: '2px 60px' }}>
          <LargeCard2 />
        </div>
        <div style={{ gridColumn: '3/3', gridRow: '1/3' }}><NewsList /></div>
        <div style={{ margin: '2px 60px' }}>
          <RegularCard css={{ width: '19rem', border: 'none' }} />
          <hr />
            <SmallCard/>
        </div>
        <div>
          <RegularCard css={{ width: '43rem', border: 'none' }} />
        </div>

      </div >
    </>
  )
}
export {Grid2}
