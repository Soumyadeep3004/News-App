import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './subLogo.png'
export default function RegularCards({ css, news }) {
    // console.log("news> " ,news);
    // const data = news && news[0]
    // const data = news ? news.slice(1,4) : undefined
    // console.log("data",data);
    
    // console.log(data);
    const temp = [1, 2, 3]

    return (
        <span style={{ margin: '7px' }}>
            {
                news?.map((val) => (
                    <a href={val.url} key={val.title}>
                        <Card className='card' style={css}>
                            <Card.Img variant="top" src={val?.urlToImage ? val.urlToImage : image} style={{ padding: '4px' }} />
                            <Card.Body>
                                <Card.Title><h4>{val.title}</h4>
                                </Card.Title>
                                <span>{val.author}</span>
                                {/* <Button variant="outline-primary">More...</Button> */}
                            </Card.Body>
                        </Card>
                    </a>
                ))
            }

        </span>
    )
}
