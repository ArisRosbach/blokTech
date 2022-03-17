// Begin bericht in de console weergegeven met camelcase.
const camelCase = require("camelcase");
console.log(camelCase("ik-ben-aris_rosbach"));


const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

// Hiermee haal ik het db.js bestand op.
const {
  utilsDB
} = require("./utils/db");

// Laad variableen uit mijn .env
require("dotenv").config();

// Code om de database te koppelen
const {
  MongoClient
} = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@blok-tech-aris.lqajs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Alle dieren die in array staan in console weergeven.
utilsDB(client).then(data => {
  console.log(data);
});

// Gebruiken van hbs voor extensions.
app.engine("hbs", exphbs.engine({
  defaultLayout: "main",
  extname: ".hbs",
}));

// Middleware to setup hbs view engine.
app.set("view engine", "hbs");

// Code om images en css te serven in directory "static".
app.use("/static", express.static("static"));

// Middleware om omtegaan met incoming data in de body van een request. In dit geval POST.
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Wanneer applicatie wordt geladen wordt deze functie in werking gezet.
// async geeft aan dat dit een funcite is waarin dingen langer duren, zoals data uit een database halen.
app.get("/", async (req, res) => {

  // data uit de database wat in een array is gestopt wordt nu in de constante dieren gezet.
  const dieren = await utilsDB(client);

  // ophalen dieren database en deze weergeven op de localhost:8000.
  res.render("matches", {
    dieren: dieren
  });
});

// Wanneer gebruiker een radiobutton heeft aangeklikt wordt deze functie in werking gezet.
app.post("/formulier", async (req, res) => {

  // Ophalen van data duur wat langer dus laten wachten tot dit gelukt is.
  const dieren = await utilsDB(client);

  console.log(req.body);

  // Filteren asieldieren
  const filteredDieren = dieren.filter((dieren) => {
    // Stop het item alleen in de array wanneer onderstaande regel 'true' is.
    return dieren.diersoort == req.body.diersoort;
  });

  // Renderen van localhost:8000/formulier met de gefilterde dieren.
  res.render("matches", {
    dieren: filteredDieren
  });
});

// Wanneer gebruiker op delete klikt wordt deze functie in werking gezet.
// HTML5 ondersteund geen DELETE dus vandaar post.
app.post("/delete", async (req, res) => {

  // Wachten tot database is connected.
  await client.connect();

  console.log(req.body);
  console.log(req.body.asieldier);

  // Het dier op naam verwijderen die overeenkomt met de naam die geklikt is.
  client.db("userdb").collection("users").deleteOne({
    naam: req.body.asieldier
  }).then(hond => {
    console.log(hond);
  });

  // Response is dat de home pagana opnieuw geladen wordt.
  res.redirect("/");

});

// Hiermee worden er nieuwe routes gemaak.
app.get("/about", onabout);
app.get("/login", onlogin);
app.get("*", notfound);


function onabout(req, res) {
  res.send("<h1>Hier vind je alles about me!</h1>");
}

function onlogin(req, res) {
  res.send("<h1>Op deze pagina kun je inloggen</h1>");
}

function notfound(req, res) {
  res.send("<h1>404 - Not Found!</h1>");
}


// Geeft aan dat de app draait op de poort 8000.
app.listen(PORT, function () {
  console.log("listening to port: ", PORT);
});