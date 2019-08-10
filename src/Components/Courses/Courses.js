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
            selectedSubject: false,
            selectedSubjectNo: false
        }
    }

    changeCurSubject1 = (event) => {
        this.setState({ curCourse: event.target.value, selectedSubject: false });
    }

    changeCurSubject2 = (course) => {
        this.setState({ curCourseNo: '', curCourse: course, selectedSubject: true });
    }

    changeCurSubjectNo1 = (event) => {
        this.setState({ curCourseNo: event.target.value, selectedSubjectNo: false });
    }

    changeCurSubjectNo2 = (courseNo) => {
        this.setState({ curCourseNo: courseNo, selectedSubjectNo: true });
    }

    getCourseInfo = () => {
        fetch("https://andrewtong.api.stdlib.com/ubcwiki@dev/?courseName=" + this.state.curCourse.toLowerCase() + this.state.curCourseNo)
            .then(answer => answer.json()).then(answerJson => console.log(answerJson)).catch(error => console.log(error));
    }


    render() {
        const { curCourse, curCourseNo, selectedSubject, selectedSubjectNo } = this.state;
        return (
            <div>
                <div className="flex justify-center">
                    <Dropdown style={{marginRight: '20px'}}>
                        <Dropdown.Toggle className="shadow-5" variant="" id="dropdown-basic">
                            <input value={curCourse} onChange={this.changeCurSubject1} style={{ borderStyle: "none", opacity: '100', outline: 'none' }} type="text" placeholder="Subject" >
                            </input>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '200px' }}>
                            {
                                (!selectedSubject) ? Object.keys(subjects).filter((course) => course.toLowerCase().includes(curCourse.toLowerCase())).map((course) => {
                                    return (<Dropdown.Item onClick={() => this.changeCurSubject2(course)} key={course} as="button">{course}</Dropdown.Item>)
                                }) : Object.keys(subjects).map((course) => { return (<Dropdown.Item onClick={() => this.changeCurSubject2(course)} key={course} as="button">{course}</Dropdown.Item>) })
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown style={{marginLeft : '20px'}}>
                        <Dropdown.Toggle className="shadow-5" variant="" id="dropdown-basic">
                            <input value={curCourseNo} onChange={this.changeCurSubjectNo1} style={{ borderStyle: "none", opacity: '100', outline: '0' }} type="text" placeholder="Number" >
                            </input>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ width: '200px' }}>
                            {
                                (!selectedSubjectNo) ?
                                ((Object.keys(subjects).includes(curCourse.toUpperCase())) ?
                                    subjects[curCourse.toUpperCase()].filter((num) => num.toString().includes(curCourseNo)).map(courseNo => {
                                        return (<Dropdown.Item onClick={() => this.changeCurSubjectNo2(courseNo)} key={courseNo} as="button">{courseNo}</Dropdown.Item>)
                                    })
                                    : <Dropdown.Item disabled>Please Select Subject</Dropdown.Item>)
                                    : subjects[curCourse.toUpperCase()].map(courseNo => {
                                        return (<Dropdown.Item onClick={() => this.changeCurSubjectNo2(courseNo)} key={courseNo} as="button">{courseNo}</Dropdown.Item>)
                                    })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <button onClick={this.getCourseInfo} className='w-30 grow f4 pv2 white bg-light-red' style={{ marginTop: '20px' }}>Get Info</button>
            </div>
        );
    }
}

export default Courses;