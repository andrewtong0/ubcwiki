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
import ProfessorInfo from './ProfessorInfo'

const orangeColour = "rgb(238, 104, 83)";

const response = {
    title: "CPSC 110",
    description: "Computation, programs, and programming",
    tags: ["First Year", "Clickers", "Assignment Heavy"],
    resourcesLink: "#",
    pastExamsLink: "#",
    difficulty: 70,
    rating: 60,
    courseDescriptionSsc: "Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.",
    courseDescriptionCustom: "CPSC 110 aims to introduce basic coding techniques to students at a beginner level. The course teaches coding fundamentals with Racket in the DrRacket IDE and has a core focus on recursive coding techniques. The grade distribution usually takes on a bimodal shape with one peak at around 60% and the other at 90%. This distribution is generally justified as the separation between students putting time into the course, and those who do not.",
    professors: [
        {
            imagesrc: "gregor-kiczales",
            tag: "Professor",
            name: "Gregor Kiczales",
            courses: ["CPSC 110"],
            rating: 0.65
        },
        {
            imagesrc: "anthony-estey",
            tag: "Professor",
            name: "Anthony Estey",
            courses: ["CPSC 110", "CPSC 210"],
            rating: 0.95
        }
    ]
}


class CoursePage extends React.Component {
    renderProfessors = (professorsData) => {
        const components = [];
        for (let i = 0; i < professorsData.length; i++) {
            components.push(this.renderProfessor(professorsData[i]));
        }
        return components;
    }

    renderProfessor = (profData) => {
        return (
            <ProfessorInfo imagesrc={profData.imagesrc} tag={profData.tag} name={profData.name} courses={profData.courses}/>
        )
    }

    render() {
        return (
            <div className="coursePage">
                <div className="topBanner" style={{backgroundColor: orangeColour, height: "8em"}}/>
                <div className="container" style={{marginTop: "1em"}}>
                    <div className="row">
                        <Col id="course-sidebar" sm={4}>
                            <div id="course-name">
                                <h2 className="coursePage-leftColumn">{response.title}</h2>
                            </div>
                            <div id="course-summary">
                                <h5 className="coursePage-leftColumn">{response.description}</h5>
                            </div>
                            <div id="course-tags" style={{textAlign:"left"}}>
                                <Badge className="coursePage-courseTags">First Year</Badge>
                                <Badge className="coursePage-courseTags">Clickers</Badge>
                                <Badge className="coursePage-courseTags">Assignment Heavy</Badge>
                            </div>
                            <div id="course-resources">
                                <Button className="coursePage-buttons" variant="outline-danger" href={response.resourcesLink}>Resources</Button>
                            </div>
                            <div id="course-pastexams">
                                <Button className="coursePage-buttons" variant="outline-danger" href={response.pastExamsLink}>Past Final Exams</Button>
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
                                            valueEnd={response.difficulty}
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
                                            valueEnd={response.rating}
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
                        <Col id="course-description" sm={8} className="course-description">
                            <div id="course-description-ssc" className="ssc-description">
                                <h5>Course Description</h5>
                                <p>{response.courseDescriptionSsc}</p>
                                <p className="coursePage-sscQuote">~ UBC SSC course description</p>
                            </div>
                            <div id="course-description-custom" className="custom-description">
                                <p>{response.courseDescriptionCustom}</p>
                            </div>
                            <br/>
                            <div id="course-professors">
                                <h5>Professors</h5>
                                <div className="container">
                                    <div className="row">
                                        {this.renderProfessors(response.professors)}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoursePage;
