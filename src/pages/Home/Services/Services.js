import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import img from '../../../Images/ICONS Logos/Frame1.png'
import img2 from '../../../Images/ICONS Logos/carbon_time.png'
import img3 from '../../../Images/ICONS Logos/healthicons_doctor-outline.png'
import img4 from '../../../Images/ICONS Logos/Group1.png'

const Services = () => {
    return (
       <Container fluid className="mt-5 ">
             <h2 className="text-center">Why Choose TM?</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            <p className="text-center text">industry. Lorem Ipsum has been the industry's standard</p>
            <div className="mt-5">
            <Row xs="1" md="4">
               <Col>
               <div>
                    <img src={img} alt="" className="img-icon" />
                    <h4 className="text-center">Easy to USe</h4>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               </Col>
               <Col>
               <div>
                    <img src={img2} alt="" className="img-icon" />
                    <h4 className="text-center">24 / 7 service</h4>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               </Col>
               <Col>
               <div className="doctors-col">
                    <img src={img3} alt="" className="img-icon" />
                    <h4 className="text-center">Expert Doctors</h4>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               </Col>
               <Col>
               <div >
                    <img src={img4} alt="" className="img-icon" />
                    <h4 className="text-center">Trusted</h4>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               </Col>
           </Row>
            </div>
           
       </Container>
    );
};

export default Services;