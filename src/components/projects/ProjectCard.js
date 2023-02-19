import React from 'react'
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, url }) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="imagen proyecto" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br></br>
                    <a href={url} className="proj-url">
                        <button className="proj-btn"><strong>Go</strong></button>
                    </a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard