const form = document.querySelector("#matches section:first-of-type form");

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
