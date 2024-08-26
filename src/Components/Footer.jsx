import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../assets/output-onlinepngtools.png"
import google from "../assets/google.png"
import apple from "../assets/apple.png"
export const Footer = () => {
    return (
        <div style={{ background: '#ececec' }}>
            <div style={{ padding: '90px 20px' }}>

                <Container>
                    <Row>
                        <Col xl={3}>
                            <div>
                                <img style={{ height: '170px', width: '230px' }} src={img} alt="error" />
                            </div>

                        </Col>
                        <Col xl={3}>
                            <div style={styles}>
                                <ul style={{ listStyle: 'none' }}>
                                    <h4>Company</h4>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Terms of Services</li>
                                    <li>Privacy Policy</li>
                                    <li>History</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div style={styles}>
                                <ul style={{ listStyle: 'none' }}>
                                    <h4>Help</h4>
                                    <li>Help Center</li>
                                    <li>FAQ</li>
                                    <li>Contact Us</li>
                                    <li>Ownership and Faculty Ratings</li>
                                    <li>Topics</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div style={styles}>
                                <ul style={{ listStyle: 'none' }}>
                                    <h4>Categories</h4>
                                    <li>Business</li>
                                    <li>Entertainment</li>
                                    <li>Health</li>
                                    <li>Sports</li>
                                    <li>Science</li>
                                    <li>Technology</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <div style={{display:'flex',justifyContent:'space-between'}}> 
                        <div>
                            <img src={google} alt="" style={{ height: '32px', width: 'auto' }} />
                            <img src={apple} alt="" style={{ height: '50px', width: 'auto' }} />
                        </div>
                        <div className='socialIcons'>
                            <a href=""><i className='fa-brands fa-facebook'></i></a>
                            <a href=""><i className='fa-brands fa-instagram'></i></a>
                            <a href=""><i className='fa-brands fa-twitter'></i></a>
                            <a href=""><i className='fa-brands fa-youtube'></i></a>
                            <a href=""><i className='fa-brands fa-whatsapp'></i></a>
                            <a href=""><i className='fa-brands fa-telegram'></i></a>
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p><b>Copyright©2024,NEWSAPP PVT LTD. or its affiliated companies.All rights reserved.</b></p>
                    </div>
                </Container>
            </div>
        </div>
    )
}
const styles = {

    borderStyle: 'solid',
    borderWidth: "0px",
    borderTopWidth: '5px',
    borderColor: 'black',
    padding: '30px 0px'
}