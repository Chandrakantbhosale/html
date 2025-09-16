import React from "react";
import childComponent from "./childComponent";

export default function Welcome(props) {
    return (
        <>
            <h1>Hello, chandrakant</h1>
            <childComponent firstName = "Virat" />
        </>
    );
}

// export default class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() {

//         // this.props.firstName = "Rohit";
        
//         return (
//             <div>
//                  <h1>Hello{this.props.firstName} {this.props.lastName}, welcome to ReactJS</h1>
//                  <childComponent />
//             </div>
//         );}
// } 