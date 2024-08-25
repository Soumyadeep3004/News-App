import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

export default function Slider() {
    const styles = {
        image: {
            objectFit: "cover",
            height: "700px",
            width: "100%"
        },
        imageOverlay: {
            width: "100%",
            height: "700px",
            backgroundColor: "#000",
            position: "absolute",
            opacity: 0.5,
        }
    };
    const temp = [1, 2, 3]
    return (
        <div >
            <Carousel>
                {
                    temp.map((val) => (
                        <Carousel.Item interval={1000} key={val}>
                            <div style={{height:'600px', width:'100vw', backgroundColor:'#000',position: "absolute",opacity:'0.5'}}></div>
                            {/* <div style={styles.imageOverlay}></div>
                            <div  style={styles.image} > */}

                            <ExampleCarouselImage img={'https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                            {/* </div> */}
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>

        </div>
    )
    
}
