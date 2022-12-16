// Chiedo il nome all'utente
const firstName = prompt("Hi, what's your name?");
console.log(firstName);

// Chiedo il cognnome all'utente
const surname = prompt(
  firstName + " it's a beautiful name! What's your surname?"
);
console.log(surname);

// Chiedo il colore preferito all'utente
const color = prompt(
  "Well done " +
    firstName +
    " " +
    surname +
    "! Now can you tell me what's your favorite color please?"
);
console.log(color);

// Concateno i valori
console.log(firstName, surname, color);

// Genero la password
const passwordGenerate = firstName + surname + color + 21;
console.log(passwordGenerate);

// Inserisco la password generata nel documento html
document.getElementById("password").innerHTML = passwordGenerate;
