import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/ICONS Logos/l.png'
import arrow from '../../../Images/ICONS Logos/ic_round-keyboard-double-arrow-right.png'
import map from '../../../Images/ICONS Logos/Group.png'
import phone from '../../../Images/ICONS Logos/phone.png'
import email from '../../../Images/ICONS Logos/email.png'
import web from '../../../Images/ICONS Logos/mdi_web.png'
import fb from '../../../Images/ICONS Logos/fb.png'
import youtube from '../../../Images/ICONS Logos/youtube.png'
import linked from '../../../Images/ICONS Logos/link.png'
import twitter from '../../../Images/ICONS Logos/twiter.png'
import instagram from '../../../Images/ICONS Logos/insta.png'
import './Footer.css'
import img2 from '../../../Images/Image Resources/play_store 1.png'
import img3 from '../../../Images/Image Resources/apple 1.png'


const Footer = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <div className="w-75 mx-auto">
                <Row xs="1" md="2">
                    <Col md="7">
                        <Row xs="2" md="2">
                            <Col md="8">
                                <div >
                                    <img src={logo} alt="" />
                                    <p className="footer-para">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                                    <h5 className="contactTitle">Contact Us</h5>
                                    <div className="d-flex">
                                        <img src={map} alt="" className="footer-icon" />
                                        <p className="footer-text">House-20, Road-27, Block-A, Banani, Dhaka.</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={phone} alt="" className="footer-icon" />
                                        <p className="footer-text">+8801234567890, +88058269458</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={email} alt="" className="footer-icon" />
                                        <p className="footer-text">tmbd@mail.com</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={web} alt="" className="footer-icon" />
                                        <p className="footer-text">tmbd.com</p>

                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className=" mt-5 pt-3 d-flex">
                                    <img src={arrow} alt="" className="footer-icon" />
                                    <p className="">Doctor</p>

                                </div>
                                <div className="d-flex">
                                    <img src={arrow} alt="" className="footer-icon" />
                                    <p className="">Service</p>

                                </div>
                                <div className="d-flex">
                                    <img src={arrow} alt="" className="footer-icon" />
                                    <p className="">Pharmacy owner</p>

                                </div>
                                <div className=" mt-5 ">
                                    <h6>Social Links</h6>
                                    <div>
                                        <img src={fb} alt="" className="me-1" />
                                        <img src={youtube} className="ms-1 me-1" alt="" />
                                        <img src={twitter} className="ms-1 me-1"  alt="" />
                                        <img src={instagram} alt="" className="ms-1 me-1"  />
                                        <img src={linked} className="ms-1 me-1"  alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="5">
                        <div className="footerRight-col">
                            <Row xs="2" md="2">
                                <Col md="6">
                                    <div className=" mt-5 pt-3 d-flex">
                                        <img src={arrow} alt="" className="footer-icon" />
                                        <p className="">About Us</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={arrow} alt="" className="footer-icon" />
                                        <p className="">Blog</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={arrow} alt="" className="footer-icon" />
                                        <p className="">Contact Us</p>

                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className=" mt-5 pt-3 d-flex">
                                        <img src={arrow} alt="" className="footer-icon" />
                                        <p className="">Terms & Conditions</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={arrow} alt="" className="footer-icon" />
                                        <p className="">Privacy Policy</p>

                                    </div>
                                    <div className="d-flex">
                                        <img src={arrow} alt="" className="footer-icon" />
                                        <p className="">FAQ</p>

                                    </div>
                                </Col>
                            </Row>
                            <div className=" footer-app-section d-flex mt-3">
                                <p className="download-title">Download Our App</p>
                                <img src={img2} className="ms-1 footerImg ing-fluid" alt="" />
                                <img src={img3} alt="" className="ms-1 footerImg img-fluid" />
                            </div>
                        </div>
                    </Col>

                </Row>
                <p className="copyTitle">&#169; Copyright TM 2021. All rights reserved. Created by Golden Infotech.</p>
            </div>

        </Container>
    );
};

export default Footer;