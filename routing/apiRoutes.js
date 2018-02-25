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
  // Below code handles when a user submits a form and thus submits data to the server.

  app.post("/api/friends", function(req, res) {
  	// var scores take user input scores
  	var scores = req.body['scores[]'];
  	var currentMin = 1000;
  	var currentMinIndex = -1; 
  	for (var i = 0; i < friends.length; i++) {
  		// otherScores take already in data scores
  		var otherScores = friends[i].scores;
  		var difference = 0;
  		for (var j = 0; j < scores.length; j++) {
  			difference = difference + Math.abs(scores[j] - otherScores[j]);
  		}

  		if (difference < currentMin) {
  			currentMinIndex = i;
  			currentMin = difference;
  		}
  	}
  	res.json(friends[currentMinIndex]);

  });
};