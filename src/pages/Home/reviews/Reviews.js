import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../Images/Image Resources/man2.png'
import img2 from '../../../Images/ICONS Logos/Frame.png'
import img3 from '../../../Images/ICONS Logos/Frame(1).png'
import man from '../../../Images/Image Resources/man.png'
import man2 from '../../../Images/Image Resources/man3.png'
import women from '../../../Images/Image Resources/women.png'
import arrow from '../../../Images/ICONS Logos/arrow(1).png'
import arrow2 from '../../../Images/ICONS Logos/arrow.png'

const Reviews = () => {
    return (
        <>
            <Container fluid className="mt-5 pt-5">

                <div className="about-top w-75 mx-auto">
                    <h2 className="text-center">What Are The Patients
                        Saying About us</h2>
                    <p className="review-text ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>

                <div className="w-75 mx-auto mt-5 pt-5">
                    <Row xs="1" md="2">
                        <Col md="6" className="mt-3">
                            <div >
                                <img src={img} className="imageMan img-fluid" alt="" />

                            </div>
                        </Col>
                        <Col md="6" className="mt-3">
                            <div >
                                <div className="">
                                    <img src={img3} alt="" />
                                    <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>

                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="">Foisal Morshed</h6>
                                    <p>Student, CSE, University of Royal</p>
                                </div>
                                <div>
                                    <img src={img2} className=" qoat-img " alt="" />
                                </div>

                            </div>

                            <div >
                                <Row >
                                    <Col></Col>
                                    <Col >
                                        <div >
                                            <div className="d-flex">
                                                <img src={man} alt="" className="me-1 " />
                                                <img src={man2} className=" me-1" alt="" />
                                                <img src={women} className=" " alt="" />
                                            </div>
                                        </div>

                                        <div>
                                            <Row>
                                                <Col></Col>
                                                <Col>
                                                    <div className="arrow-section w-75 mx-auto d-flex justify-content-between">
                                                        <img src={arrow} alt="" />
                                                        <img src={arrow2} alt="" />
                                                    </div>

                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                    </Row>

                </div >


            </Container >

        </>


    );
};

export default Reviews;