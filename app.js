import express from "express";


import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());


/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

// define a variable to store the port number
const port = 3000;

// app.get('/astronauts',(req, res) => {
//   // res.status(200).json(activities, 'data');
//   //res.send('hello world');
//   const astronauts = getAstronauts();
//   res.status(200).json({
//     "success": true,
//     "payload": getAstronauts()
//   })
// });

// same as above but with an async as its an asynchronous function
app.get('/astronauts', async (req, res) => {
  //const astronauts = await getAstronauts();
  res.status(200).json({
    "success": true,
    "payload": await getAstronauts()
  })
});



// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

app.post('/astronauts', async (req, res) => {
  // userInput is a store of whatever data the person wants to add for their new astronaut as they will
  // write it in the request body
  const userInput = req.body;
  // astronautNew is a store of the createAstronaut function being used anyschronously to create
  // a new astronaut based on the userInput
  const astronautNew = await createAstronaut(userInput);
  // res.status(201).json({message: "Successfully Registered", status: 201});
  res.status(201).json(
  {
    "success": true,
    "payload": astronautNew
  });
});



app.listen(port, () =>{
  console.log('listening on '+ port)
});

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

export default app;
