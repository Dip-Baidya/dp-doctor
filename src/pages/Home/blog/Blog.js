import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
import img from '../../../Images/Image Resources/baby.png'
import img2 from '../../../Images/Image Resources/old.png'
import img3 from '../../../Images/Image Resources/girls.png'
import img4 from '../../../Images/Image Resources/back.png'

const Blog = () => {
    return (
        <Container fluid className="mt-5">
            <h2 className="text-center">What Are The Patients
                Saying About us</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            <p className="text-center text">industry. Lorem Ipsum has been the industry's standard</p>
            <div className="w-75 mx-auto mt-5">
                <Row xs="1" md="4">
                    <Col>
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
                    <Col>
                    <div>
                        <img src={img} alt="" className="blog-img img-fluid" />
                        <p className="date-text">November 5, 2021</p>
                        <p className="blog-title">Cild care for Winter Season</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        <div className="d-flex justify-content-between ">
                        <p className="doctor-name">Dr. Saifur Rahman</p>
                        <button className="read-btn">Read More</button>
                        </div>
                        
                    </div></Col>
                    <Col>
                    <div>
                        <img src={img} alt="" className="blog-img img-fluid" />
                        <p className="date-text">November 5, 2021</p>
                        <p className="blog-title">Cild care for Winter Season</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        <div className="d-flex justify-content-between ">
                        <p className="doctor-name">Dr. Saifur Rahman</p>
                        <button className="read-btn">Read More</button>
                        </div>
                        
                    </div></Col>
                    <Col>
                    <div>
                        <img src={img} alt="" className="blog-img img-fluid" />
                        <p className="date-text">November 5, 2021</p>
                        <p className="blog-title">Cild care for Winter Season</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                        <div className="d-flex justify-content-between ">
                        <p className="doctor-name">Dr. Saifur Rahman</p>
                        <button className="read-btn">Read More</button>
                        </div>
                        
                    </div></Col>
                </Row>
            </div>
        </Container>
    );
};

export default Blog;