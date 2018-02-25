// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on frinds-data.

var friends = [{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Ahmed2",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      3,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Ahmed3",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      2,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Ahmed4",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      5,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Ahmed5",
	  "photo":"https://www.netonnet.se/GetFile/ProductImagePrimary/ljud-och-bild/tv/46-50tum/skantic-b5010fhd(231364)_1_Normal_Large.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      3,
	      2,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	];
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
  	console.log(req.body['scores[]']);
  	var scores = req.body['scores[]'];
  	var currentMin = 1000;
  	var currentMinIndex = -1; 
  	for (var i = 0; i < friends.length; i++) {
  		console.log("***" + i);
  		var otherScores = friends[i].scores;
  		console.log(otherScores);
  		var difference = 0;
  		for (var j = 0; j < scores.length; j++) {
  			difference = difference + Math.abs(scores[j] - otherScores[j]);
  		}
  		console.log("difference: " + difference);
  		if (difference < currentMin) {
  			currentMinIndex = i;
  			currentMin = difference;
  			console.log("bfhjs");
  		}
  	}
  	res.json(friends[currentMinIndex]);

  });
};