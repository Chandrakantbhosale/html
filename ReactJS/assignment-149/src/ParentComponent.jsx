// import React from "react";
// import Welcome from "./Welcome" 

// export default function ParentCompnent(props) {
   
//     return(
//         <div>
//                 <h1>Parent component</h1>
//         <Welcome firstName= { props.firstName} lastName ={props.lastName} />
//         </div>      
//     )
// }


import React from "react";
import Welcome from "./Welcome";

export default function ParentComponent() {
    const firstName = "Virat";
    const lastName = "Kohli";

    return (
        <div>
            <h1>This is the Parent Component</h1>
            <Welcome firstName={firstName} lastName={lastName} />
        </div>
    );
}
