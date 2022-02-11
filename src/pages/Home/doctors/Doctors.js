import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Doctors.css'
import img from '../../../Images/Image Resources/pngtree-new-transparent-mobile-mockup-png-image-and-vector-png-image_2632149 1.png'
import one from '../../../Images/ICONS Logos/1.png'
import two from '../../../Images/ICONS Logos/2.png'
import three from '../../../Images/ICONS Logos/3.png'

const Doctors = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <h2 className="text-center">Only Three Easy Steps to Follow</h2>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
            <p className="text-center text">industry. Lorem Ipsum has been the industry's standard</p>
            <div className="mt-5 pt-5">
                <Row xs="1" md="2">
                    <Col md="5">
                    <div className="Col-right">
                            <img src={img} className="imagePhone img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col md="7">
                        <div className="doctors-right">
                           <div className="d-flex">
                               <img src={one} alt="" className="img-number" />
                               <div >
                               <p className="doctor-text">Search the Doctor for Appointment</p>
                                   <p className="doctorPara">
                                   Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience.
                                   </p>
                               </div>
                             
                           </div>

                        </div>
                        <div className="doctors-right">
                           <div className="d-flex">
                               <img src={two} alt="" className="img-number" />
                               <div >
                               <p className="doctor-text">Get Doctor Consultation through Video Calling</p>
                                   <p className="doctorPara">
                                   Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation.
                                   </p>
                               </div>
                             
                           </div>

                        </div>
                        <div className="doctors-right">
                           <div className="d-flex">
                               <img src={three} alt="" className="img-number" />
                               <div >
                               <p className="doctor-text">Get Your Prescription</p>
                                   <p className="doctorPara">
                                   Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later.
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

export default Doctors;