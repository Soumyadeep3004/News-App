import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from './subLogo.png'

export default function RegularCard({ css,news }) {
  const data = news ? news : undefined
  return (
    <a href={data?.url ? data.url :null}>
    <div>
      <span style={{ margin: '7px' }}>
        <Card className='card' style={css}>
          <Card.Img variant="top" src={data?.urlToImage ? data.urlToImage : image}  style={{padding:'4px'}}/>
          <Card.Body>
            <Card.Title><h4>{data?.title ? data.title :null}</h4>
            </Card.Title>
            <Card.Text>
            {data?.description ? data.description.slice(0,100) :null}...
            </Card.Text>
            <span>{data?.author ? data.author :null}</span>
          </Card.Body>
        </Card>
      </span>
    </div>
    </a>
  )
}
