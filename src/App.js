import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import CoursePage from './Components/CoursePage/CoursePage';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
// import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';

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
            rating: "65/100",
            name: "Gregor Kiczales",
            courses: ["CPSC 110"]
        },
        {
            imagesrc: "anthony-estey",
            rating: "95/100",
            name: "Anthony Estey",
            courses: ["CPSC 110", "CPSC 210"]
        }
    ]
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'home',
            response: undefined
        }
    }

    changePage = (newPage) => {
        this.setState({ page: newPage });
    }

    selectPage = (pageName) => {
        const homeComponent = ['signin', 'register', 'coursePage'].map((route, key) => {
            return (
                <Link key={key} style={{ textDecoration: "none" }} exact="true" to={"/" + route} >
                    <button className="grow white bg-light-red" onClick={() => { this.changePage(route) }} style={{ height: '3.5em', width: '5em', marginTop: '5px', marginRight: '5px' }}>{route}</button>
                </Link>
            )
        })
        switch (pageName) {
            case 'home':
                return (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {homeComponent}
                        </div>
                        <h1 style={{ marginTop: '5px', marginBottom: '20px' }} className="f-subheadline lh-solid">UBC Wikipedia</h1>
                        <Courses />
                    </div>
                );
            case 'register':
                return (<Register changePage={this.changePage} />);
            case 'signin':
                return (<Signin changePage={this.changePage} />);
            case 'coursePage':
                return (<CoursePage changePage={this.changePage} response={response} />);
        }
    }

    renderCourse = ({match}) => {
        let temp = {};
 
        // console.log(this.state.response === undefined);
        if (this.state.response === undefined) {
            fetch("https://andrewtong.api.stdlib.com/ubcwiki@dev/?courseName=" + match.params.courseNo)
            .then(answer => answer.json()).then(answerJson => this.setState({response : answerJson})).catch(error => console.log(error));
            return (<h1>loading</h1>);
        } else {
            console.log(this.state.response);
            return (<CoursePage changePage={this.changePage} response={this.state.response} />);
        }
    }

    test = ({match}) => {
        return (<h1>{match.params.courseNo}</h1>);
    }



    render() {
        return (
            <div className="tc">
                <BrowserRouter>
                    <Route exact path="/" render={() => this.selectPage('home')}></Route>
                    <Route exact path="/register" render={() => this.selectPage('register')}></Route>
                    <Route exact path="/signin" render={() => this.selectPage('signin')}></Route>
                    <Route exact path="/:courseNo" render={(input) => this.renderCourse(input)}></Route>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
