import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import axios, { all } from 'axios';
import { Link } from 'react-router-dom';
import image from "../assets/image.jpg"
import logo from "../assets/opacityLogo.png"

export default function Slider() {
    const [allNews, setAllNews] = useState([]);

    function generateRandomNumbers() {
        // Generate a random number between 0 and 14
        let num1 = Math.floor(Math.random() * 13);
        
        // Calculate the second number to ensure the difference is 5
        let num2 = num1 + 7;
        
        return [num1, num2];
      }

    useEffect(() => {
        let nums = generateRandomNumbers();
        // console.log(nums);
        
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a8b9cbf7c2694f5999f9220defb1ad90`).then((res) => {
            setAllNews(res.data.articles.slice(nums[0],nums[1]));
            // console.log("All News > ",res.data.articles);

            // res.data.articles.map((item)=>(
            //     item.title != "[Removed]" && item.urlToImage != null ? allNews.push(item) : null
            // ))
            // console.log("filtered > ",allNews);
            
        }).catch((err) => {
            console.error("Error : ", err);
        })
    },[])


    // const styles = {
    //     image: {
    //         objectFit: "cover",
    //         height: "700px",
    //         width: "100%"
    //     },
    //     imageOverlay: {
    //         width: "100%",
    //         height: "700px",
    //         backgroundColor: "#000",
    //         position: "absolute",
    //         opacity: 0.5,
    //     }
    // };
    const temp = [1, 2, 3]


    return (
        <div >
            <Carousel>
                {
                    allNews.map((val) => (
                            <Carousel.Item interval={2000} key={val.url}>
                                <div style={{ height: '600px', width: '100vw', backgroundColor: '#000', position: "absolute", opacity: '0.5' }}></div>
                                {/* <div style={styles.imageOverlay}></div>
                            <div  style={styles.image} > */}

                                <ExampleCarouselImage img={val.urlToImage ? val.urlToImage : image} />
                                {/* </div> */}
                                <Carousel.Caption>
                                    <h3>{val.title}</h3>
                                    {/* <p>{val.content}</p> */}
                                    <p>{val.description}</p>
                                    <a href={val.url} style={{color:'white',fontWeight:'600',textDecoration:'none'}}>Read More</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                    ))
                }
            </Carousel>

        </div>
    )

}
