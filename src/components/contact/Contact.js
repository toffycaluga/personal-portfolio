import "./Contact.css"
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";

import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com";


function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('service_nd0sedo', 'template_zhl09hj', e.target, 'Ua1DstxHwog44t238').then(res => {
            setButtonText("Send");
            setStatus({ succes: true, message: 'Message sent successfully' });
        }, (err) => {
            console.log(err);
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        });
        setButtonText("Send");

    };
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text"
                                                    name="firstName" placeholder="First Name" onChange={onFormUpdate} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text"
                                                    name="lastName" placeholder="Last Name" onChange={onFormUpdate} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email"
                                                    name="email" placeholder="Email Address" onChange={onFormUpdate} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel"
                                                    name="phone" placeholder="Phone No." onChange={onFormUpdate} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6"
                                                    name="message" placeholder="Message" onChange={onFormUpdate}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact