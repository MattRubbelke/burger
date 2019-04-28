// Dependencies
// =============================================================
var express = require("express");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars express
var exphbs = require("express-handlebars");

// Setting the handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports routes and gives the server access
var routes = require("./controller/burgerController")
app.use(routes)

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });  