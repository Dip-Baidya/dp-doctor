import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './banner.css'
import img from '../../../Images/Image Resources/Frame.png'
import img2 from '../../../Images/Image Resources/play_store 1.png'
import img3 from '../../../Images/Image Resources/apple 1.png'

const Banner = () => {

    return (
        <Container fluid>
            <Row xs="1" md="2">
                <Col md="6">
                    <div className="left-col">
                        <div className="left-details">
                        <h2>Protect  and Take</h2>
                        <h2>Care of Your Health</h2>
                        <p>Download Our App and feel free to 
                        take your Health Advice from a Specialist.</p>
                        <button className="btn-login mt-1">Search for a service</button>
                        <div className=" d-flex mt-3">
                            <img src={img2} alt="" />
                            <img src={img3} alt="" className="play-img"/>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="right-col">
                        <img src={img} className="image-banner" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;