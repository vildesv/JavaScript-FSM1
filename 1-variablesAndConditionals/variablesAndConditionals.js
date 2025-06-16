/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Script-filen er allerede koblet til index.html-filen. Lenken er lagt til i <head>-delen av HTML-filen.
console.log("JavaScript-filen er koblet til HTML-filen!");

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

let string = "Dette er en tekststreng";
const number = 31;
let isTrue = true;
let isFalse = false;
let array = ["eple", "banan", "appelsin"];

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Matematiske operatorer:
let a = 10;
let b = 5;
console.log(a + b); // Legger sammen a og b: 15
console.log(a - b); // Trekker b fra a: 5
console.log(a * b); // Multipliserer a og b: 50
console.log(a / b); // Dividerer a med b: 2
console.log(a % b); // Resten etter divisjon: 0

// Forkortede operatorer:
a++; // Øker a med 1
b--; // Reduserer b med 1
a += 5; // Legger til 5 til a
b -= 2; // Trekker fra 2 fra b

// Sammenligningsoperatorer:
let x = 10;
let y = 20;
console.log(x > y); // false (x er ikke større enn y? 
console.log(x < y); // true (x er mindre enn y
console.log(x == y); // false (x er ikke lik y i verdi)
console.log(x === y); // false (x er ikke lik y i verdi og type)
console.log(x != y); // true (x er ikke lik y))

// Logiske operators:
let erVoksen = true;
let harJobb = false;

console.log(erVoksen && harJobb); // Og: false
console.log(erVoksen || harJobb); // Eller: true
console.log(!erVoksen); // Ikke: false

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Ola";
// let userName = ""; - feilmelding oppstår når brukernavnet er tomt
let userAge = 18;
// let userAge = 17; - feilmelding oppstår når brukeren er under 18 år
let userIsLoggedIn = false;
let userIsBlocked = false;
// let userIsBlocked = true; - feilmelding oppstår når brukeren er blokkert
let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("Velkommen, " + userName + "! Du er nå logget inn og blir sendt til " + goToPage);
} else {
  console.log("Innlogging feilet. Sjekk at brukernavn er fylt ut, at du er over 18 år, og at kontoen ikke er blokkert.");
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;
const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle); // Forventet output: "Mrs."

const userMale2 = true;
const userTitle2 = userMale2 ? "Mr." : "Mrs.";
console.log(userTitle2); // Forventet output: "Mr."