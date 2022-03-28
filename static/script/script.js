const form = document.querySelector("#matches section:first-of-type form");
const buttonfeiten = document.querySelector(".facts button");

// Constanten voor elke radiobutton.
const buttonHond = document.getElementById("hond");
const buttonKat = document.getElementById("kat");
const buttonKnaagdier = document.getElementById("knaagdier");
const buttonOverig = document.getElementById("overig");

// Constante voor h3 waarschuwing.
const h3Waarschuwing = document.querySelector("#matches section:first-of-type h3");

// Wanneer JavaScript ondersteund is required in html weghalen zodat custom melding kan worden gemaakt.
const verwijderenRequired = () => {
  document.getElementById("hond").removeAttribute("required");
};

// Required verwijderen meteen bij opstarten.
verwijderenRequired();

// Wanneer op submitbutton wordt geklikt hetvolgende uitvoeren.
form.addEventListener("submit", (event) => {
  // Voorkomt dat formulier wordt opgestuurd.
  event.preventDefault();

  // Er wordt gekeken of er een button is aangeklikt.
  if (buttonHond.checked == true) {
    form.submit();
  } else if (buttonKat.checked == true) {
    form.submit();
  } else if (buttonKnaagdier.checked == true) {
    form.submit();
  } else if (buttonOverig.checked == true) {
    form.submit();
  } else {
    console.log("Je hebt niets aangeklikt");
    h3Waarschuwing.classList.add("errorh3");
    // h3 veranderen naar volgende string
    h3Waarschuwing.innerHTML = "Je hebt nog geen diersoort gekozen!";
  }
});


// API Random zoo animal.
const URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/2';

// Haal de lijst 'ul' op uit de html.
const list = document.querySelector('.facts ul');
// Haal de button op uit de html.
const button = document.querySelector('.facts button');


// Functie om de lijst te vullen met dierentuin dieren.
function getZooDieren() {

  // Vraag de data op van de api url.
  getData(URL).then(data => {
    const alleZooDieren = data;

    // Voeg de dieren toe aan de ul.
    alleZooDieren.forEach(dierentuinDier => {

      // Voor ieder dier een <li> element.
      let amiiboListElement =
        `<li>
            <img src="${dierentuinDier.image_link}" alt="${dierentuinDier.id}">
            <h3>${dierentuinDier.name}</h3>
            <p>Ze worden gemiddeld ${dierentuinDier.lifespan} oud.</p>
				</li>`;

      // 'insert' de 'li' in de 'ul'.
      list.insertAdjacentHTML('beforeend', amiiboListElement);
    })
  });
}

// Generieke functie om data aan een API te vragen.
async function getData(URL) {
  return (
  fetch(URL)
  .then ( response => response.json() )
  .then ( jsonData => jsonData )
  );
}

// Wanneer er op button wordt geklikt, functie getZooDieren uitvoeren.
button.addEventListener("click", getZooDieren);