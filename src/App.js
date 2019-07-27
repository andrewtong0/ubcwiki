import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
// import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }






  render() {
    return (
      <div className="tc">
        <h1 style={{ marginTop: '1%' }} className="f-subheadline lh-solid">UBC Wikipedia</h1>
        <Courses />
      </div>
    );
  }
}


export default App;
