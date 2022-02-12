import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../Images/Image Resources/Group 3.png'
import img2 from '../../../Images/Image Resources/video call image.png'
import './BannerAbout.css'

const BannerAbout = () => {
    return (
        <Container fluid className="mt-5">
            <h2 className="text-center">About Us</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            <p className="text-center text">industry. Lorem Ipsum has been the industry's standard</p>
          <section >
          <Row xs="1" md="2">
                <Col md="5">
                    <img src={img} className="image-about-banner mt-3" alt="" />
                </Col>
                <Col md="7">
                    <div >
                        <p className="textRight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button className="readMore-btn">Read more</button>
                    </div>
                </Col>
            </Row>
          </section>
          <h2 className="videoHeader">Video Consultation from the Best doctors </h2>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            <p className="text-center text">industry. Lorem Ipsum has been the industry's standard</p>
            <div className="mt-3">
                <Row xs="1" md="2">
                    <Col md="7">
                        <div className="">
                            <p className="textRight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className="readMore-btn">Read more</button>
                        </div>
                    </Col>
                    <Col md="5">
                        <div className="rightCol">
                            <img src={img2} className="imageCall" alt="" />
                        </div>
                    </Col>
                </Row>
          </div>
        </Container>
    );
};

export default BannerAbout;