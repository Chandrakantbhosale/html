import React from "react";
import "./../public"

export default class Welcome extends React.Component {
    constructor(){
        super();
  }

  firstName = "Chandrakant"

  welcome() {
    return `welcome to ReactJs ${this.firstName}`;
  }

  render() {
    return (
     <>
   <h1>Welcome to React Js, functional component : {this.firstName}</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, officiis minima natus in iste eaque dolorum
     sint laborum optio ratione. Est harum tempore esse deserunt! Doloribus quaerat cupiditate nobis totam!</p>
     </>
   )
  }
}
