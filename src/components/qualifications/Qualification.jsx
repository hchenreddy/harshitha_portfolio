import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 ? "qualification__button qualification__active" : "qualification__button"} 
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div 
                        className={toggleState === 2 ? "qualification__button qualification__active" : "qualification__button"} 
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Content */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master’s in Computers and Information Systems</h3>
                                <span className="qualification__subtitle">Saint Louis University, MO</span>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelor’s in Computer Science and Engineering</h3>
                                <span className="qualification__subtitle">JNTU Hyderabad, Telangana</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience Content */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {[
                            { title: "Java Developer", company: "Intuit, USA", date: "Oct 2023 - Present" },
                            { title: "Software Engineer", company: "Hexaware Technologies, India", date: "Jan 2019 - Aug 2022" }
                        ].map((job, index) => (
                            <div className="qualification__data" key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div>
                                            <h3 className="qualification__title">{job.title}</h3>
                                            <span className="qualification__subtitle">{job.company}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i> {job.date}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification__title">{job.title}</h3>
                                            <span className="qualification__subtitle">{job.company}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i> {job.date}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
