import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        if (toggleState === index) {
            setToggleState(0); // Close modal if the same one is clicked again
        } else {
            setToggleState(index);
        }
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I Have Built</span>

            <div className="projects__container container grid">
                {/* Project 1 - Loan Processing System */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-transaction projects__icon"></i>
                        <h3 className="projects__title">Loan Processing <br /> System</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                </div>

                {/* Project 2 - Cloud-Based API Gateway */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-cloud projects__icon"></i>
                        <h3 className="projects__title">Cloud-Based <br /> API Gateway</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                </div>

                {/* Project 3 - Customer Insights Dashboard */}
                <div className="projects__content">
                    <div>
                        <i className="uil uil-chart-line projects__icon"></i>
                        <h3 className="projects__title">Customer Insights <br /> Dashboard</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>
                </div>
            </div>

            {/* Modals */}
            <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="projects__modal-title">Loan Processing System</h3>
                    <p className="projects__modal-description">
                        Developed a scalable loan processing system using Spring Boot, Microservices, and AWS.
                        Ensured secure end-to-end encryption, optimized performance, and integrated RESTful APIs 
                        for smooth transactions.
                    </p>
                </div>
            </div>

            <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="projects__modal-title">Cloud-Based API Gateway</h3>
                    <p className="projects__modal-description">
                        Designed a high-performance API Gateway using Java, Spring Cloud, and Azure.
                        Implemented OAuth2 authentication, API rate limiting, and optimized request routing
                        to enhance scalability and security.
                    </p>
                </div>
            </div>

            <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                    <i className="uil uil-times projects__modal-close" onClick={() => setToggleState(0)}></i>
                    <h3 className="projects__modal-title">Customer Insights Dashboard</h3>
                    <p className="projects__modal-description">
                        Built an interactive Customer Insights Dashboard using React, Angular, and MongoDB.
                        Integrated GraphQL APIs, Jenkins CI/CD pipelines, and ensured data visualization
                        for real-time analytics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
