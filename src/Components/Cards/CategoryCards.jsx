import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import axios from 'axios';
import image from './subLogo.png'
import Button from 'react-bootstrap/Button';

export const CategoryCards = ({ cat }) => {

    const [catNews, setCatNews] = useState();

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${cat}&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((response) => {
            console.log("category news > ", response.data.articles.slice(8));
            setCatNews(response.data.articles.slice(8));
        }).catch((err) => {
            console.error(err);
        })
    }, [])

    //function for show more
    const [visibleCount, setVisibleCount] = useState(15);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 15);
    };

    const temp = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <h2 style={{
                        marginLeft: "10px", fontFamily: 'Playfair Display,serif',
                        fontWeight: '600',
                        color: 'rgba(154, 17, 17, 0.886)',
                    }}>More stories from {cat}</h2>
                    {
                        catNews?.slice(0, visibleCount)?.map((val, index) => (
                            <a href={val?.url ? val.url : null} key={index}>
                                <div style={{ display: 'flex', alignItems: 'center', padding: "10px", borderBottomWidth: "1px", borderBottomColor: "gray", borderBottomStyle: 'solid', maxWidth: '800px' }}>
                                    <div className='verticalCardImage' style={{ margin: "0px 0px 0px 0px" }}>
                                        <img style={{ height: '150px' }} src={val?.urlToImage ? val.urlToImage : image} alt="image" />
                                    </div>
                                    <div className='cardText' style={{ marginLeft: "20px", maxWidth: '500px', marginTop: "0px", paddingTop: "0px" }}>
                                        <p style={{ fontSize: '27px', fontWeight: '500', fontFamily: 'times new roman' }}>{val?.title ? val.title : null}</p>
                                        <span>{val?.author ? val.author : null}</span>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
                <div className="d-grid gap-2" style={{marginTop:'14px'}}>
                    {visibleCount < catNews?.length && (
                        <Button variant="outline-primary" onClick={showMore} >Show More</Button>
                    )}
                </div>
            </div>
        </>
    )
}
