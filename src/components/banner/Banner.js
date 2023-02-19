import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImg from "./HeaderImg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Banner.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["FullStack javascrip", "Profesional Clown"];
    const period = 2000;



    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio </span>
                                    <h1>{`Hi! I'm Abraham Lillo (Toffy Caluga)`} <span className="txt-rotate" dataPeriod="500" data-rotate='[  "FullStack javascrip", "Profesional Clown" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>I'm a circus clown with a wide
                                        trajectory in the field. At the moment
                                        getting into full stack dev
                                        javascript junior, working as a freelancer, and learning
                                        constantly new technologies, and
                                        specializing in react and nodejs.
                                        I am currently looking for a company
                                        where I can grow as a professional.</p>

                                    <a href='#connect'>

                                        <button >Let’s Connect <ArrowRightCircle size={25} /></button>
                                    </a>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <HeaderImg />

                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner