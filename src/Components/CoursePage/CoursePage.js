import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
// import ProfessorInfo from './ProfessorInfo'

const difficulty = 70;
const rating = 60;
const orangeColour = "rgb(238, 104, 83)";
const professors = ["Gregor Kiczales", "Anthony Estey"]

const CoursePage = ({ changePage }) => {
    return (
        <div className="coursePage">
            <div className="topBanner" style={{backgroundColor: orangeColour, height: "8em"}}/>
            <div className="container" style={{marginTop: "1em"}}>
                <div className="row">
                    <Col id="course-sidebar" sm={4}>
                        <div id="course-name">
                            <h2 className="coursePage-leftColumn">CPSC 110</h2>
                        </div>
                        <div id="course-summary">
                            <h5 className="coursePage-leftColumn">Computation, programs, and programming</h5>
                        </div>
                        <div id="course-tags" style={{textAlign:"left"}}>
                            <Badge className="coursePage-courseTags">First Year</Badge>
                            <Badge className="coursePage-courseTags">Clickers</Badge>
                            <Badge className="coursePage-courseTags">Assignment Heavy</Badge>
                        </div>
                        <div id="course-resources">
                            <Button className="coursePage-buttons" variant="outline-danger">Resources</Button>
                        </div>
                        <div id="course-pastexams">
                            <Button className="coursePage-buttons" variant="outline-danger">Past Final Exams</Button>
                        </div>
                        <div id="divider">
                            <hr
                                style={{
                                    color: orangeColour,
                                    backgroundColor: orangeColour,
                                    height: 5,
                                    borderRadius: "100px"
                                }}
                            />
                        </div>
                        <div id="course-difficulty" className="coursePage-rating">
                            <h4 className="coursePage-scoreTitle coursePage-titleAndRadial">Difficulty</h4>
                            <div className="coursePage-radialScore coursePage-titleAndRadial">
                                <AnimatedProgressProvider
                                        valueStart={0}
                                        valueEnd={difficulty}
                                        duration={1.4}
                                        easingFunction={easeQuadInOut}
                                    >
                                    {value => { const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                styles={buildStyles({
                                                    pathTransition: 'none',
                                                    pathColor: orangeColour,
                                                    textColor: orangeColour})}
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider>
                            </div>
                        </div>
                        <div id="course-rating" className="coursePage-rating">
                            <h4 className="coursePage-scoreTitle coursePage-titleAndRadial">Rating</h4>
                            <div className="coursePage-radialScore coursePage-titleAndRadial">
                                <AnimatedProgressProvider
                                        valueStart={0}
                                        valueEnd={rating}
                                        duration={1.4}
                                        easingFunction={easeQuadInOut}
                                    >
                                    {value => { const roundedValue = Math.round(value);
                                        return (
                                            <CircularProgressbar
                                                value={value}
                                                text={`${roundedValue}%`}
                                                styles={buildStyles({
                                                    pathTransition: 'none',
                                                    pathColor: orangeColour,
                                                    textColor: orangeColour})}
                                            />
                                        );
                                    }}
                                </AnimatedProgressProvider>
                            </div>
                        </div>
                    </Col>
                    <Col id="course-description" sm={8} style={{marginTop: "2.75em"}}>
                        <div id="course-description-ssc" className="course-description">
                            <p>Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.</p>
                            <p className="coursePage-sscQuote">~ UBC SSC course description</p>
                        </div>
                        <div id="course-description-custom" className="course-description">
                            <p>CPSC 110 aims to introduce basic coding techniques to students at a beginner level. The course teaches coding fundamentals with Racket in the DrRacket IDE and has a core focus on recursive coding techniques. The grade distribution usually takes on a bimodal shape with one peak at around 60% and the other at 90%. This distribution is generally justified as the separation between students putting time into the course, and those who do not.</p>
                        </div>
                        <div id="course-professors">
                            <div className="container">
                                <div className="row">
                                    <Col sm={4}>
                                        a
                                    </Col>
                                    <Col sm={4}>
                                        b
                                    </Col>
                                    <Col sm={4}>
                                        c
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default CoursePage;
