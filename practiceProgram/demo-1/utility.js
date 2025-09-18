// const event = require("events");

// const eventEmit = new event();

// function welcome(){
//     setTimeout(function(){
//         console.log("Welcome to NodeJS One");

//     }, 4000);
// }

// function welcomeTwo(){
//     setTimeout(function(){
//         console.log("Welcome to NodeJS Two");

//     }, 3000);
// }

// eventEmit.on("Welcome", welcome);
// eventEmit.on("Welcome", welcomeTwo);

// module.exports = eventEmit;


// const event = require("events");

// const eventEmit = new event();

// function welcomeOne(){
//     setTimeout(function(){
//         console.log("Welcome to NodeJS One");

//     }, 3000);
// }

// function welcomeTwo(){
//     setTimeout(function(){
//         console.log("Welcome to NodeJS Two");

//     }, 3000);
// }

// eventEmit.on("Welcome", welcomeOne);
// eventEmit.on("Welcome", welcomeTwo);

// module.exports = {eventEmit, welcomeOne, welcomeTwo };

const event = require("events");

const eventEmit = new event();

function welcomeOne(){
    setTimeout(function(){
        console.log("Welcome to NodeJS One");

    }, 3000);
}

function welcomeTwo(){
    setTimeout(function(){
        console.log("Welcome to NodeJS Two");

    }, 3000);
}

eventEmit.on("Welcome", welcomeOne);
eventEmit.on("Welcome", welcomeTwo);

module.exports = {eventEmit, welcomeOne, welcomeTwo };