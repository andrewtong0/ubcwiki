import React from 'react';
import Course

class ProfessorInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name = '',
            coursesList = []
        }
    }

    render() {
        const { name, coursesList } = this.state;
        return (
            <div className="professorInfo">
                <img src=""/>
                <p>Gregor Kiczales</p>
                <p>CPSC 110, CPSC 210</p>
            </div>
        )
    }
}
