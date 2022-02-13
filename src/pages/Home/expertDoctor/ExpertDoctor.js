import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../../Images/Image Resources/Group27.png'
import './ExpertDoctor.css'


const ExpertDoctor = () => {
    return (
        <Container fluid className="mt-5 ">

            <div className="about-top w-75 mx-auto">
                <h2 className="text-center">Are You a Qualified & Expert Doctor?</h2>
                <p className="about-text ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            </div>

            <div className="mt-5">
                <Row xs="1" md="2">
                    <Col md="7">
                        <div >
                            <div className="doctor-section">
                                <h5 className="doctor-title">Be a Part of TM</h5>
                                <p className="doctorPara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <button className="readMore-btn">Sign Up Now</button>
                            </div>
                        </div>
                    </Col>
                    <Col md="5">
                        <div className="exdoctor-right-col">
                            <img src={img} className="imageCall img-fluid" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    );
};

export default ExpertDoctor;