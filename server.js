var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
const port = process.env.PORT || 4000;
app.listen(port);
method=GET path="/" host=protected-sea-96460.herokuapp.com request_id=e7e0e8f5-8d65-4d4a-ac90-ab9893c9bcea fwd="12.97.151.18" 
method=GET path="/favicon.ico" host=protected-sea-96460.herokuapp.com request_id=ab56931b-f3f2-49b3-8335-39beac3d9cb4 fwd="12.97.151.18"


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});