import React from 'react';
import { Dropdown } from 'react-bootstrap';
const subjects = {
    CPSC: [110, 121, 210, 213, 221],
    MATH: [104, 105, 200, 221]
}

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curCourse: '',
            curCourseNo: '',
            selected: false
        }
    }

    changeCurSubject1 = (event) => {
        this.setState({ curCourse: event.target.value });
    }

    changeCurSubject2 = (course) => {
        this.setState({ curCourse: course, selected: true });
    }

    changeCurSubjectNo1 = (event) => {
        this.setState({ curCourseNo: event.target.value });
    }

    changeCurSubjectNo2 = (courseNo) => {
        this.setState({ curCourseNo: courseNo });
    }

    getCourseInfo = () => {
        fetch("https://andrewtong.api.stdlib.com/ubcwiki@dev/?courseName=" + this.state.curCourse.toLowerCase() + this.state.curCourseNo)
            .then(answer => answer.json()).then(answerJson => console.log(answerJson)).catch(error => console.log(error));
    }


    render() {
        const { curCourse, curCourseNo } = this.state;
        return (
            <div>
                <div className="flex justify-center">
                    <Dropdown>
                        <Dropdown.Toggle className="shadow-5" variant="" id="dropdown-basic">
                            <input value={curCourse} onChange={this.changeCurSubject1} style={{ borderStyle: "none", opacity: '100', outline: 'none' }} type="text" placeholder="Subject" >
                            </input>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '200px' }}>
                            {
                                Object.keys(subjects).filter((course) => course.toLowerCase().includes(curCourse.toLowerCase())).map((course) => {
                                    return (<Dropdown.Item onClick={() => this.changeCurSubject2(course)} key={course} as="button">{course}</Dropdown.Item>)
                                }
                                )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle className="shadow-5" variant="" id="dropdown-basic">
                            <input value={curCourseNo} onChange={this.changeCurSubjectNo1} style={{ borderStyle: "none", opacity: '100', outline: '0' }} type="text" placeholder="Number" >
                            </input>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '200px' }}>
                            {
                                (Object.keys(subjects).includes(curCourse.toUpperCase())) ?
                                    subjects[curCourse.toUpperCase()].map(courseNo => {
                                        return (<Dropdown.Item onClick={() => this.changeCurSubjectNo2(courseNo)} key={courseNo} as="button">{courseNo}</Dropdown.Item>)
                                    })
                                    : <Dropdown.Item disabled>Please Select Subject</Dropdown.Item>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <button onClick={this.getCourseInfo} className='w-30 grow f4 link ph3 pv2 dib white bg-light-red' style={{ marginTop: '20px' }}>Get Info</button>
            </div>
        );
    }
}

export default Courses;