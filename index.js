const camelCase = require('camelcase');
console.log(camelCase('ik-ben-aris_rosbach'));


const express = require('express')
const app = express()
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser')
const multer = require('multer')
const PORT = 8000


const {test}  = require('./utils/db')

require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@blok-tech-aris.lqajs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(test)
test(client)


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



// array met alle dieren uit het asiel
const dieren = [{
    naam: "Bowser",
    imgSrc: "static/images/hondBulldog.png",
    ras: "Bulldog",
    locatie: "Dierentehuis Hoorn",
    diersoort: "hond",
  },
  {
    naam: "Sammy",
    imgSrc: "static/images/hondLabrador.png",
    ras: "Labrador",
    locatie: "Asiel Den Helder",
    diersoort: "hond",
  },
  {
    naam: "Ming",
    imgSrc: "static/images/konijnBruin.png",
    ras: "Konijn",
    locatie: "Dierentehuis Hoorn",
    diersoort: "knaagdier",
  },
  {
    naam: "Muffin",
    imgSrc: "static/images/katLapjeskat.png",
    ras: "Lapjeskat",
    locatie: "Dierentehuis Den Helder",
    diersoort: "kat",
  },
  {
    naam: "Pip",
    imgSrc: "static/images/katKitten.png",
    ras: "Kitten",
    locatie: "Dierenpension 't Schipperke",
    diersoort: "kat",
  },
  {
    naam: "Beau",
    imgSrc: "static/images/hondPoedel.png",
    ras: "Poedel",
    locatie: "Dierentehuis Hoorn",
    diersoort: "hond",
  },
  {
    naam: "Jordi",
    imgSrc: "static/images/hondOnbekend.png",
    ras: "Onbekend",
    locatie: "Dierentehuis Alkmaar",
    diersoort: "hond",
  },
  {
    naam: "Monti",
    imgSrc: "static/images/hondHerder.png",
    ras: "Herder",
    locatie: "Dierenpension 't Schipperke",
    diersoort: "hond",
  },
  {
    naam: "Kay",
    imgSrc: "static/images/katGrijs.png",
    ras: "Kat",
    locatie: "Dierentehuis Hoorn",
    diersoort: "kat",
  },
];


// Gebruiken van hbs voor extensions
app.engine("hbs", exphbs.engine({
  defaultLayout: "main",
  extname: ".hbs",
}));

// middleware to setup hbs view engine
app.set("view engine", "hbs");

// om images en css te serven in directory "static"
app.use('/static', express.static('static'));

// middleware om omtegaan met incoming data in de body van een request. In dit geval POST
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// res.render() wordt gebruikt om een view te renderen en verstuurd de gerenderde HTML naar de client. 
app.get("/", (req, res) => {
  res.render("matches", {
    dieren: dieren
  });
});

app.post("/formulier", (req, res) => {
  console.log(req.body);
  // filter animals
  const filteredDieren = dieren.filter((dieren) => {
    // stop het item alleen in de array wanneer onderstaande regel 'true' is
    return dieren.diersoort == req.body.diersoort;
  });
  //render same page with filtered animals
  res.render("matches", {
    dieren: filteredDieren
  });
});



app.get('/', onhome)
app.get('/about', onabout)
app.get('/login', onlogin)
app.get('*', notfound)

function onhome(req, res) {
  res.send('<h1>Dit is de homepagina!</h1>')
}

function onabout(req, res) {
  res.send('<h1>Hier vind je alles about me!</h1>')
}

function onlogin(req, res) {
  res.send('<h1>Op deze pagina kun je inloggen</h1>')
}

function notfound(req, res) {
  res.send('<h1>404 - Not Found!</h1>')
}

app.listen(PORT, function () {
  console.log('listening to port: ', PORT)
})