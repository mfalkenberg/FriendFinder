// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on frinds-data.

var friends = require("../data/friends");

// Routing
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form 
  // and thus submits data to the server.
  app.post("/api/friends", function(req, res) {
  	// save the user input scores for easier access
  	// into a local var
  	var scores = req.body['scores[]'];

  	// create variables to be used in the for loop for comparison 
  	var currentMin;
  	var currentMinIndex; 
  	
  	// iterate through the array of friends to find the 
  	// perfect match 
  	for (var i = 0; i < friends.length; i++) {
  		// save the friend's scores for easier access
  		// into a variable
  		var otherScores = friends[i].scores;

  		// calculate the difference between the two arrays 
  		// by comparing each item
  		var difference = 0;
  		for (var j = 0; j < scores.length; j++) {
  			difference = difference + Math.abs(scores[j] - otherScores[j]);
  		}

  		// if it is the first or the new best match
  		// save it's data
  		if (i == 0 || difference < currentMin) {
  			currentMinIndex = i;
  			currentMin = difference;
  		}
  	}

  	// write the best match object in the response
  	res.json(friends[currentMinIndex]);

  });
};