import React from 'react';

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                             alt="HTML" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                             alt="CSS" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                             alt="JavaScript" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                             alt="Bootstrap" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" 
                             alt="Angular" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                             alt="React" className="skills__icon" width="40" height="40"/>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Frontend;
