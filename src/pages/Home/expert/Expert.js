import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Expert.css'
import arrow from '../../../Images/ICONS Logos/ic_round-keyboard-double-arrow-right.png'

const Expert = () => {
    return (
        <Container className="mt-5">

            <div className="about-top w-75 mx-auto">
                <h2 className="text-center">Expert & Varified Doctors</h2>
                <p className="about-text w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>

            <div className="expertDoctor-section">
                <Row xs="2" md="4">
                    <Col className="mt-3">
                        <div className=" mt-5 ">
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
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">General Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Maternal Healthcare</p>

                            </div>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className=" mt-5 ">
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
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">General Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Maternal Healthcare</p>

                            </div>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className=" mt-5 ">
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
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">General Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Maternal Healthcare</p>

                            </div>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className=" mt-5 ">
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
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">General Healthcare</p>

                            </div>
                            <div className="d-flex">
                                <img src={arrow} alt="" className="img-number" />
                                <p className="doctor-text">Maternal Healthcare</p>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Expert;