import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      curSubject: '',
      selected: false
    }
  }

  changeCurSubject1 = (event) => {
    this.setState({ curSubject: event.target.value });
  }

  changeCurSubject2 = (course) => {
    this.setState({ curSubject: course, selected: true });
  }




  render() {
    return (
      <div className="tc">
        <h1 style={{ marginTop: '1%' }} className="f-subheadline lh-solid">UBC Wikipedia</h1>
        <div className="flex justify-center">
          <Dropdown>
            <Dropdown.Toggle className="shadow-5" variant="" id="dropdown-basic">
              <input value={this.state.curSubject} onChange={this.changeCurSubject1} style={{ borderStyle: "none", opacity: '100', outlineWidth: '0' }} type="text" placeholder="Subject" >
              </input>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '200px' }}>
              <Courses curCourse={this.state.curSubject} changeCurSubject={this.changeCurSubject2} />
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle className="shadow-5" variant="" id="dropdown-basic">
              <input value={this.state.curSubject} onChange={this.changeCurSubject1} style={{ borderStyle: "none", opacity: '100', outlineWidth: '0' }} type="text" placeholder="No." >
              </input>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '200px' }}>
              <Courses curCourse={this.state.curSubject} changeCurSubject={this.changeCurSubject2} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}


export default App;
