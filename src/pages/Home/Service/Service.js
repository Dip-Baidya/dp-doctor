import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../Images/Image Resources/shape.png'
import './Service.css'
import arrow from '../../../Images/ICONS Logos/ic_round-keyboard-double-arrow-right.png'

const Service = () => {
    return (
        <Container fluid className="mt-5">
            <div className="about-top w-75 mx-auto">
            <h2 className="text-center">Our Service</h2>
                <p className="about-text w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            
            <div className="mt-5">
                <Row xs="1" md="2">
                    <Col md="5">
                        <div className="mt-5">
                            <img src={img} className="imagePhone img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col md="7">
                        <div className="">
                            <p className="service-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className="readMore-btn">Read more</button>
                        </div>
                        <div className=" mt-5 service-para">
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">General Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Maternal Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Child Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Elder Healthcare</p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    );
};

export default Service;