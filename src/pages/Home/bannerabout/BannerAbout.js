import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../Images/Image Resources/Group 3.png'
import img2 from '../../../Images/Image Resources/video call image.png'
import './BannerAbout.css'

const BannerAbout = () => {
    return (
        <Container fluid className="mt-5">
            <div className="about-top w-75 mx-auto">
                <h2 className="text-center">About Us</h2>
                <p className="about-text w-50 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div >
                <Row xs="1" md="2">
                    <Col md="5" className="mt-3">
                        <img src={img} className="image-about-banner mt-3 img-fluid" alt="" />
                    </Col>
                    <Col md="7" className="mt-3">
                        <div >
                            <p className="textRight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className="readMore-btn">Read more</button>
                        </div>
                    </Col>
                </Row>
            </div>
           
            
            <div className="w-50 mx-auto">
            <h2 className="videoHeader">Video Consultation from the Best doctors </h2>
                <p className="text-center w-75 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>


            <div className="mt-3">
                <Row xs="1" md="2">
                    <Col md="7" className="mt-3">
                        <div className="">
                            <p className="textRight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className="readMore-btn">Read more</button>
                        </div>
                    </Col>
                    <Col md="5" className="mt-3">
                        <div className="rightCol">
                            <img src={img2} className="imageCall img-fluid " alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default BannerAbout;