
// GET mothod

// fetch("http://localhost:3000/home", {
//     method: "GET"
// }).then(function (httpResp){
//     return httpResp.text();
// }).then(function (httpReq){
//     console.log(httpReq);
// })



// POST Method

// const user = {
//     "fName": "sachin",
//     "lname": "Tendulkar"
// }

// fetch("http://localhost:3000/home", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers : {"content-type": "application/json"},
    
// }).then(function(httpResp){
//   console.log(httpResp)
//   return httpResp.json();
// }).then(function(response){
//   console.log(response);
// }).catch(function(error){
//   console.log(error)
// })


/*

const userObj = {
  "firstName": "Rohit",
  "lastName": "Sharma",
  "age": 36,
  "profession": "Cricketer",
  "country": "India"
}

fetch("http://localhost:3001/home", {
  method: "POST",
  body: JSON.stringify(userObj),
  headers: { "content-type": "application/json" },
}).then(function(httpReq){
  console.log(httpReq)
  return httpResp.json();
}).then(function(response){
  console.log(response);
}).catch(function(error){
  console.log(error)
}) */
  
  // PUT method


//   const cricket = {
//     "firstName" : "Sachin",
//     "lastName" : "Tendulkar",
//     "age" : 29,
//     "prfession" : "Cricket",
//     "iplTeam" : "Mumbai Indians"
//   }

//   fetch("http://localhost:3000/home",{
//     method : "PUT",
//     body : JSON.stringify(cricket),
//     headers : {"content-type" : "application/json"},
//   }).then(function(request){
//     console.log(request);
//     return request.json();
//   }).then(function(response){
//     console.log(response);
    
//   }).catch(function(error){
//     console.log(error);
//   });

  // PATCH method

//   const product = {
//     "producName" : "samsang",
//     "productType" : "phone",
//     "productPrice" : "20000",
//     "productLocation" : "Pune"
//   }

// fetch("http://localhost:3000/home",{
//     method : "PATCH",

//     body : JSON.stringify(product),
//     headers : {"content-type": "application/json"},
// }).then(function(request){
//     console.log(request);
//     return request.json();
// }).then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error);
// });


 // DELETE method

 const product1 = {
    "product": "Product is deleted"
 }

 fetch("http://localhost:3000/home",{
    method : "DELETE",
    body : JSON.stringify(product1),
    headers : {"content-type": "application/json"}

 }).then(function(httpResp){
  console.log(httpResp)
  return httpResp.json();
}).then(function(response){
  console.log(response);
}).catch(function(error){
  console.log(error) 
});


//  fetch("http://localhost:3000/home",{
//     method : "DELETE",
  

// }).then(function(httpResp){
//   console.log(httpResp)
//   return httpResp.json();
// }).then(function(response){
//   console.log(response);
// }).catch(function(error){
//   console.log(error) 
// });

