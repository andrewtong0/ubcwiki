import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import CoursePage from './Components/CoursePage/CoursePage';
// import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'home'
        }
    }

    changePage = (newPage) => {
        this.setState({page: newPage});
    }

    selectPage = (pageName) => {
        switch(pageName) {
            case 'home':
                return (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button className="grow white bg-light-red" onClick={() => {this.changePage('signin')}} style={{ width: '5em', marginTop: '5px', marginRight: '5px' }}>Sign In</button>
                            <button className="grow white bg-light-red" onClick={() => {this.changePage('register')}} style={{ width: '5em', marginTop: '5px', marginLeft: '5px', marginRight: '5px' }}>Register</button>
                            <button className="grow white bg-light-red" onClick={() => {this.changePage('coursePage')}} style={{ width: '5em', marginTop: '5px', marginLeft: '5px', marginRight: '5px' }}>Course Page</button>
                        </div>
                        <h1 style={{ marginTop: '5px', marginBottom: '20px' }} className="f-subheadline lh-solid">UBC Wikipedia</h1>
                        <Courses />
                    </div>
                );
            case 'register':
                return (<Register changePage={this.changePage}/>);
            case 'signin':
                return (<Signin changePage={this.changePage}/>);
            case 'coursePage':
                return (<CoursePage changePage={this.changePage}/>);
        }
    }

    render() {
        return (
            <div className="tc">
                {this.selectPage(this.state.page)}
            </div>
        );
    }
}

export default App;
