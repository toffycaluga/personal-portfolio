
import "./Skills.css"
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../../assets/img/color-sharp.png"

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 450 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 4, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h1>Skills</h1>

                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>javascript</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>React.JS</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>Express.JS</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>css</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>intermediate</h2>
                                        <h5>Java</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Basic</h2>
                                        <h5>python</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>bootstrap</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>postgresSQL</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>intermediate</h2>
                                        <h5>MongoDB</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>Photoshop</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item__content">
                                        <h2>Advanced</h2>
                                        <h5>Ilustrator</h5>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="background-skills" />
        </section>
    )
}

export default Skills