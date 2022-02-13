import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Order.css'
import location from '../../../Images/ICONS Logos/Group13.png'

const Order = () => {
    return (
        <Container className="mt-5">

            <div className="about-top w-75 mx-auto">
                <h2 className="text-center">Order Medicine Online from Popular Pharmacy Nearby</h2>
                <p className="about-text text-center w-75 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className="mt-5 order-section mx-auto">
                <Row xs="1" md="3">
                    <Col className="mt-3">
                        <div className="order-card">
                            <div className="w-75 mx-auto">
                                <p className="title">Shahbag Medicine Corner</p>
                                <div className="location-paragraph">
                                    <img src={location} className="location-icon" alt="" />
                                    <p className="order-para">
                                        Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className="mt-3">
                        <div className="order-card">
                            <div className="w-75 mx-auto">
                                <p className="title">Shahbag Medicine Corner</p>
                                <div className="location-paragraph">
                                    <img src={location} className="location-icon" alt="" />
                                    <p className="order-para">
                                        Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-3">
                        <div className="order-card">
                            <div className="w-75 mx-auto">
                                <p className="title">Shahbag Medicine Corner</p>
                                <div className="location-paragraph">
                                    <img src={location} className="location-icon" alt="" />
                                    <p className="order-para">
                                        Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className=" viewbtn-section w-25 mx-auto  ">
                    <button className="view-all-btn">View All</button>
                </div>
            </div>


        </Container>
    );
};

export default Order;