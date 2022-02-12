import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
import img from '../../../Images/Image Resources/baby.png'
import img2 from '../../../Images/Image Resources/old.png'
import img3 from '../../../Images/Image Resources/girls.png'
import img4 from '../../../Images/Image Resources/back.png'
import arrow from '../../../Images/ICONS Logos/arrow(1).png'
import arrow2 from '../../../Images/ICONS Logos/arrow.png'

const Blog = () => {
    return (
        <Container fluid className="mt-5">

            <div className="about-top w-75 mx-auto">
                <h2 className="text-center">What Are The Patients
                    Saying About us</h2>
                <p className="about-text w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>


            <div className="w-75 mx-auto mt-5">
                <Row xs="1" md="4">
                    <Col className="mt-3">
                        <div>
                            <img src={img} alt="" className="blog-img img-fluid" />
                            <p className="date-text">November 5, 2021</p>
                            <p className="blog-title">Cild care for Winter Season</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <div className="d-flex justify-content-between ">
                                <p className="doctor-name">Dr. Saifur Rahman</p>
                                <button className="read-btn">Read More</button>
                            </div>

                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div>
                            <img src={img2} alt="" className="blog-img img-fluid" />
                            <p className="date-text">November 5, 2021</p>
                            <p className="blog-title">Telemedicine Service</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <div className="d-flex justify-content-between ">
                                <p className="doctor-name">Dr. Saifur Rahman</p>
                                <button className="read-btn">Read More</button>
                            </div>

                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div>
                            <img src={img3} alt="" className="blog-img img-fluid" />
                            <p className="date-text">November 5, 2021</p>
                            <p className="blog-title">Pregnancy ComplicationsC</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <div className="d-flex justify-content-between ">
                                <p className="doctor-name">Dr. Saifur Rahman</p>
                                <button className="read-btn">Read More</button>
                            </div>

                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div>
                            <img src={img4} alt="" className="blog-img img-fluid" />
                            <p className="date-text">November 5, 2021</p>
                            <p className="blog-title">Backpain Treatment</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                            <div className="d-flex justify-content-between ">
                                <p className="doctor-name">Dr. Saifur Rahman</p>
                                <button className="read-btn">Read More</button>
                            </div>

                        </div></Col>
                </Row>
                <div className="blog-arrow">
                    <img src={arrow} alt="" />
                    <img src={arrow2} alt="" className="ms-3" />
                </div>
            </div>

        </Container>
    );
};

export default Blog;