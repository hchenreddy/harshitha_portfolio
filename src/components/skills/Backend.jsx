import React from 'react';

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                             alt="Java" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
                             alt="Spring Boot" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">Spring Boot</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                             alt="Docker" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                             alt="AWS" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" 
                             alt="Azure" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">Azure</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                             alt="SQL" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">SQL / PL/SQL</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Backend;
