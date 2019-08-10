import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
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

  render() {
    return (
      <div className="tc">
      {this.state.page === 'home' ? 
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="grow white bg-light-red" onClick={() => {this.changePage('signin')}} style={{ width: '5em', marginTop: '5px', marginRight: '5px' }}>Sign In</button>
            <button className="grow white bg-light-red" onClick={() => {this.changePage('register')}} style={{ width: '5em', marginTop: '5px', marginLeft: '5px', marginRight: '5px' }}>Register</button>
          </div>
          <h1 style={{ marginTop: '5px', marginBottom: '20px' }} className="f-subheadline lh-solid">UBC Wikipedia</h1>
          <Courses />
        </div>
      : this.state.page === 'register' ? <Register changePage={this.changePage}/> : <Signin changePage={this.changePage}/>

      }
        
      </div>
    );
  }
}


export default App;
