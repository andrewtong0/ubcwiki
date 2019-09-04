import React from 'react';
import Button from 'react-bootstrap/Button';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import ProfessorInfo from './ProfessorInfo'

const orangeColour = "rgb(238, 104, 83)";

class CoursePage extends React.Component {
    renderProfessors = (professorsData) => {
        const components = [];
        console.log(professorsData.length);
        for (let i = 0; i < professorsData.length; i++) {
            components.push(this.renderProfessor(professorsData[i], i));
        }
        return components;
    }
    renderProfessor = (profData, index) => {
        return (
            <ProfessorInfo key={index} imagesrc={profData.imagesrc} rating={profData.rating} name={profData.name} courses={profData.courses}/>
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
                                <h2 className="coursePage-leftColumn">{this.props.response.title}</h2>
                            </div>
                            <div id="course-summary">
                                <h5 className="coursePage-leftColumn">{this.props.response.description}</h5>
                            </div>
                            <div id="course-tags" style={{textAlign:"left"}}>
                                <Badge className="coursePage-courseTags">First Year</Badge>
                                <Badge className="coursePage-courseTags">Clickers</Badge>
                                <Badge className="coursePage-courseTags">Assignment Heavy</Badge>
                            </div>
                            <div id="course-resources">
                                <Button className="coursePage-buttons" variant="outline-danger" href={this.props.response.resourcesLink}>Resources</Button>
                            </div>
                            <div id="course-pastexams">
                                <Button className="coursePage-buttons" variant="outline-danger" href={this.props.response.pastExamsLink}>Past Final Exams</Button>
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
                                            valueEnd={this.props.response.difficulty}
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
                                            valueEnd={this.props.response.rating}
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
                                <p>{this.props.response.courseDescriptionSsc}</p>
                                <p className="coursePage-sscQuote">~ UBC SSC course description</p>
                            </div>
                            <div id="course-description-custom" className="custom-description">
                                <p>{this.props.response.courseDescriptionCustom}</p>
                            </div>
                            <br/>
                            <div id="course-professors">
                                <h5>Professors</h5>
                                <div className="container">
                                    <div className="row">
                                        {/* {this.renderProfessors(this.props.response.professors)} */}
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
