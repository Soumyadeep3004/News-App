import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import google from "../assets/google.png"
import apple from "../assets/apple.png"
import logo from "../Components/Navbar/logo.png"
export const Footer = () => {
    return (
        <div style={{ background: '#ececec' }}>
            <div style={{ padding: '90px 20px' }}>

                <Container>
                    <Row>
                        <Col xl={3}>
                            <div style={{padding:'5% 1%'}}>
                                <img style={{width: '190px'}} src={logo} alt="error" />
                            </div>

                        </Col>
                        <Col xl={3}>
                            <div style={styles}>
                                <ul style={{ listStyle: 'none' }}>
                                    <h4>Company</h4>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Terms of Services</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">History</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div style={styles}>
                                <ul style={{ listStyle: 'none' }}>
                                    <h4>Help</h4>
                                    <li><a href="">Help Center</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Ownership and Faculty Ratings</a></li>
                                    <li><a href="">Topics</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div style={styles}>
                                <ul style={{ listStyle: 'none' }}>
                                    <h4>Categories</h4>
                                    <li><a href="">Business</a></li>
                                    <li><a href="">Entertainment</a></li>
                                    <li><a href="">Health</a></li>
                                    <li><a href="">Sports</a></li>
                                    <li><a href="">Science</a></li>
                                    <li><a href="">Technology</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                        <div>
                            <a href="">
                                <img src={google} alt="" style={{ height: '32px', width: 'auto' }} />
                            </a>
                            <a href="">
                                <img src={apple} alt="" style={{ height: '50px', width: 'auto' }} />
                            </a>
                        </div>
                        <div className='socialIcons'>
                            <a href=""><i className='fa-brands fa-facebook'></i></a>
                            <a href=""><i className='fa-brands fa-instagram'></i></a>
                            <a href=""><i className='fa-brands fa-twitter'></i></a>
                            <a href=""><i className='fa-brands fa-youtube'></i></a>
                            <a href=""><i className='fa-brands fa-whatsapp'></i></a>
                            {/* <a href=""><i className='fa-brands fa-telegram'></i></a> */}
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p>Copyright©2024,NEWSAPP PVT LTD. or its affiliated companies.All rights reserved.</p>
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