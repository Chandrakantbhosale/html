import React from "react";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        // this.props.firstName = "Rohit";
        
        return (
            <div>
                 <h1>Hello{this.props.firstName} {this.props.lastName}, welcome to ReactJS</h1>
            </div>
        );}
} 