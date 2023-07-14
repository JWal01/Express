

// Require express - gives us a funtion of express.  Pulls express into this file. 
const express = require('express')

 // create an instance of express by calling the function returned above -  gives us an object. port is like an address for our function to find and host. 
const app = express();
const port = 5001

// express static file servering - public is the folder name
app.use(express.static('server/public'));

// starts up out server.
app.listen(port, () => {
    console.log('listening on port' , port)
})

console.log("Hello Tourmaline");