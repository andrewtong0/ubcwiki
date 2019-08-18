import React from 'react';

class ProfessorInfo extends React.Component {
    render() {
        return (
            <div className="professorInfo">
                <img src="gregor-kiczales.jpg"/>
                <p className="profTag">{this.props.tag}</p>
                <p className="profName">{this.props.name}</p>
                <p className="profCourses">{this.props.courses}</p>
            </div>
        )
    }
}

export default ProfessorInfo;
