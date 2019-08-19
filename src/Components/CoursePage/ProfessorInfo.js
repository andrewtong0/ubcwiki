import React from 'react';
let cardSize = 0.75;

class ProfessorInfo extends React.Component {
    printCourses = (courses) => {
        let output = "";
        for (let i = 0; i < courses.length; i++) {
            if (i == 0) {
                output = courses[0];
            }
            else {
                output += (", " + courses[i]);
            }
        }
        return output;
    }
    cardSizeScale = (size) => {
        return cardSize*size.toString() + "em";
    }

    render() {
        const imagesrc = this.props.imagesrc;
        const fullCard = {
            marginRight: "1em",
            marginTop: "1em",
            color: "rgb(238, 104, 83)"
        }
        const courseStyle = {
            fontSize: this.cardSizeScale(0.85),
            opacity: "0.8",
            marginTop: this.cardSizeScale(0.5)
        }
        const imageStyle = {
            height: this.cardSizeScale(9),
            width: this.cardSizeScale(9),
            float: "left"
        }
        const information = {
            textAlign: "left",
            float: "right",
            marginTop: this.cardSizeScale(0.5),
            marginLeft: this.cardSizeScale(0.75),
            width: this.cardSizeScale(13.5)
        }
        const profRating = {
            fontSize: this.cardSizeScale(0.85),
            textAlign: "right",
            marginRight: this.cardSizeScale(0.65)
        }

        return (
            <div className="professorCard, shadow" style={fullCard}>
                <img className="profImage" src={require("../../Images/Profs/" + imagesrc + ".jpg")} style={imageStyle}/>
                <div className="profInformation" style={information}>
                    <p className="profRating" style={profRating}>{this.props.rating}</p>
                    <p className="profName">{this.props.name}</p>
                    <p className="profCourses" style={courseStyle}>{this.printCourses(this.props.courses)}</p>
                </div>
            </div>
        )
    }
}

export default ProfessorInfo;
