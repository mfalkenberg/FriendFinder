
var express = require("express");
var bodyParser = require("body-parser");


// Tells node that we are creating an "express" server
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routing/apiRoutes")(app);

require("./routing/htmlRoutes")(app);

// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});