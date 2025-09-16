// import React from "react"
// import ParentCompnent from "./ParentComponent";

// export default function childComponent()  {
    
// return (
//     <div>
//         <h1>Implement the parent child component</h1>
//         <ParentCompnent firstName= "Rohit" lastName= "Sharma" />
//     </div>
// );
// }


import React from "react";

// Functional Child Component
export default function ChildComponent(props) {
    return (
        <div style={{ border: "1px solid blue", padding: "10px", marginTop: "10px" }}>
            <h2>This is the Child Component</h2>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
        </div>
    );
}
