let email = document.forms['form'] ["email"];
let password = document.forms["form"] ["password"];

let email_error = document.querySelector(".emali_error");
let pass_error = document.querySelector(".pass_error");
const submit = document.querySelector(".button");
submit.addEventListener("click", validated);

if (window.localStorage.getItem("email") !== null) {
    window.location.href="Home.html";
}


function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red"
        email_error.style.display = "bolck"
        email.focus();
    }

    if (password.value.length < 6) {
        password.style.border = "1px solid red"
        pass_error.style.display = "bolck"
        password.focus();
    }
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("password", password.value);

    window.location.href="Home.html"
}







// // Haal het formulier op
// const loginForm = document.getElementById('login-form');

// // Voeg een event listener toe voor het indienen van het formulier
// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // Voorkom standaardgedrag van het formulier

//   // Haal de waarden van de invoervelden op
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Controleer of de inloggegevens correct zijn
//   if (username === 'johndoe' && password === 'password123') {
//     // Sla de inloggegevens op in localStorage
//     localStorage.setItem('loggedIn', 'true');
//     localStorage.setItem('username', username);
    
//     // Ga naar de homepagina/dashboard
//     window.location.href = 'home.html';
//   } else {
//     // Toon een foutmelding als de inloggegevens niet kloppen
//     alert('Inloggegevens zijn onjuist. Probeer het opnieuw.');
//   }
// });

// // Controleer bij het laden van de pagina of de gebruiker al is ingelogd
// window.onload = () => {
//   const isLoggedIn = localStorage.getItem('loggedIn');
//   if (isLoggedIn) {
//     // Stuur de gebruiker naar de homepagina/dashboard
//     window.location.href = 'home.html';
//   }
// };

// // Schrijf een functie om uit te loggen
// function logout() {
//   // Verwijder de inloggegevens uit localStorage
//   localStorage.removeItem('loggedIn');
//   localStorage.removeItem('username');
  
//   // Ga terug naar de inlogpagina
//   window.location.href = 'login.html';
// }