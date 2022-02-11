import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Order.css'
import location from '../../../Images/ICONS Logos/Group13.png'

const Order = () => {
    return (
        <Container fluid className="mt-5">
            <h2 className="text-center">Order Medicine Online from Popular Pharmacy Nearby</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            <p className="text-center text">industry. Lorem Ipsum has been the industry's standard</p>
            <div className="mt-5 order-section mx-auto">
                <Row xs="1" md="3">
                    <Col>
                        <div className="order-card">
                            <div className="w-75 mx-auto">
                            <p className="title">Shahbag Medicine Corner</p>
                            <div className= "location-paragraph">
                                <img src={location} className="location-icon" alt="" />
                                <p className="order-para">
                                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
                                </p>
                            </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col>
                        <div className="order-card">
                            <div className="w-75 mx-auto">
                            <p className="title">Shahbag Medicine Corner</p>
                            <div className= "location-paragraph">
                                <img src={location} className="location-icon" alt="" />
                                <p className="order-para">
                                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
                                </p>
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="order-card">
                            <div className="w-75 mx-auto">
                            <p className="title">Shahbag Medicine Corner</p>
                            <div className= "location-paragraph">
                                <img src={location} className="location-icon" alt="" />
                                <p className="order-para">
                                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
                                </p>
                            </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </div>

        </Container>
    );
};

export default Order;