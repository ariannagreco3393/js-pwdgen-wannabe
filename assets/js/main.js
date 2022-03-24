/* 
Chiedi all’utente il suo nome,
chiedi il suo cognome,
chiedi il suo colore preferito
scrivi sulla pagina il risultato in questo formato : nomecognomecolorepreferito22
*/

// chiedi all'utente il suo nome
const first_name = prompt("Inserisci il tuo nome")
console.log(first_name);

// chiedi all'utente il suo cognome
const last_name = prompt("inserisci il tuo cognome")
console.log(last_name);

// chiedi all'utente il suo colore preferito
const color = prompt("inserisci il tuo colore preferito")
console.log(color);

//scrivi sulla pagina il risultato in questo formato : nomecognomecolorepreferito22
const password = `${first_name}${last_name}${color}22`
document.getElementById("password").innerHTML = `${first_name}${last_name}${color}22`
