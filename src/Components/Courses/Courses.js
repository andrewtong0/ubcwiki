import React from 'react';
import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap';
const courses = ['CPSC110', 'CPSC121', 'CPSC221', 'SCIE222'];

function Courses(props) {
    return (
        <div>
            {
                courses.filter((course) => course.toLowerCase().includes(props.curCourse.toLowerCase())).map((course) => {
                    return (<Dropdown.Item onClick={() => props.changeCurSubject(course)} key={course} as="button">{course}</Dropdown.Item>)
                }
                )
            }
        </div>
    );
}

export default Courses;