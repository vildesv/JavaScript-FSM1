// Funksjoner og metoder oppgave

/******************************************************************************

Oppgave 1: Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni funksjonen)

******************************************************************************/

// Funksjonen sjekker om tallet er partall eller oddetall
function sjekkTall(tall) {
  return tall % 2 === 0 ? "Partall" : "Oddetall";
}

// Eksempler:
console.log(sjekkTall(4)); // Partall
console.log(sjekkTall(7)); // Oddetall


/******************************************************************************

Oppgave 2: Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten. 

******************************************************************************/

// Tar inn en tekst og returnerer den i store bokstaver med "!" til slutt
const ropUt = (tekst) => tekst.toUpperCase() + "!";

// Eksempler:
console.log(ropUt("Dette er kult")); // DETTE ER KULT!


/******************************************************************************

Oppgave 3: 

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Returnerer en passende hilsen basert på tidspunkt
function hils(navn, time) {
  if (time === undefined) return "Feil: mangler timeverdi";
  if (time < 0 || time > 23) return "Ugyldig tid";
  if (time <= 5) return `God natt ${navn}`;
  if (time <= 11) return `God morgen ${navn}`;
  if (time <= 17) return `God dag ${navn}`;
  return `God kveld ${navn}`;
}

// Eksempler:
console.log(hils("Anders", 3));  // God natt Anders
console.log(hils("Lise", 10));   // God morgen Lise
console.log(hils("Maja", 15));   // God dag Maja
console.log(hils("Per", 21));    // God kveld Per
console.log(hils("Test"));       // Feil: mangler timeverdi


/******************************************************************************
 
Oppgave 4: Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

******************************************************************************/

// Returnerer ny array uten første og siste element
const fjernYtterste = (arr) => arr.slice(1, -1);

// Eksempler:
console.log(fjernYtterste(["Rød", "Grønn", "Blå", "Gul"])); // ["Grønn", "Blå"]
console.log(fjernYtterste(["En", "To", "Tre", "Fire", "Fem", "Seks"])); // ["To", "Tre", "Fire", "Fem"]


/******************************************************************************

Oppgave 5: 

Bruk stringmetoder på stringen for å gjøre følgende:
- Erstatt ordet "vanskelig" med "gøy".
- Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen. 
Eksempel 1: "Javascript er vanskelig" skal returnere "Javascript er gøy".
Eksempel 2: "Det er vanskelig å bruke metoder" skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "vanskelig" skal returnere "gøy".

******************************************************************************/

// Erstatter "vanskelig" med "gøy" og fjerner whitespace
function endreSetning(str) {
  return str.trim().replaceAll("vanskelig", "gøy");
}

// Eksempler:
console.log(endreSetning("Javascript er vanskelig")); // "Javascript er gøy"
console.log(endreSetning("Det er vanskelig å bruke metoder")); // "Det er gøy å bruke metoder"
console.log(endreSetning("vanskelig")); // "gøy"


/******************************************************************************

Oppgave 6: 

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.
Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.
Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.
Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

// Steg 1: Fjern første element
items.shift();

// Steg 2: Erstatt "Viskelær" med "Linjal"
const indexViskelær = items.indexOf("Viskelær");
if (indexViskelær !== -1) {
  items[indexViskelær] = "Linjal";
}

// Steg 3: Bytt ut "Penn" og "Notatbok" med "Markeringspenn"
const indexPenn = items.indexOf("Penn");
if (indexPenn !== -1) {
  items.splice(indexPenn, 2, "Markeringspenn");
}

// Steg 4: Kombiner til én string med " | "
const kombinert = items.join(" | ");
console.log(kombinert); // Eks: "Markeringspenn | Linjal | Blyant | Markør"

// Ekstra: Lag ny array med bare elementer som inneholder bokstaven "e"
const medE = items.filter(item => item.includes("e"));
console.log(medE);


/******************************************************************************

Oppgave 7 - Ekstra utfordring #1: Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Legger til string i array hvis den ikke finnes, ellers fjerner den
function oppdaterArray(arr, element) {
  const index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(element);
  }
  return arr;
}

// Eksempler:
console.log(oppdaterArray(["Rød", "Grønn"], "Blå")); // ["Rød", "Grønn", "Blå"]
console.log(oppdaterArray(["Rød", "Grønn", "Blå"], "Grønn")); // ["Rød", "Blå"]


/******************************************************************************

Oppgave 8 - Ekstra utfordring #2: Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/
// Returnerer forskjellig string basert på parameter-type
const emojiSvar = (input) => {
  if (typeof input === "string") return `😎${input}😎`;
  if (typeof input === "number") return `😎${(input * 2).toString()}😎`;
  if (typeof input === "boolean") return input ? "😎Ja😎" : "😎Slapp av😎";
  return "😎Kun primitive verdier😎";
};

// Eksempler:
console.log(emojiSvar("Kult"));       // 😎Kult😎
console.log(emojiSvar(7));            // 😎14😎
console.log(emojiSvar(true));         // 😎Ja😎
console.log(emojiSvar(false));        // 😎Slapp av😎
console.log(emojiSvar({ test: 1 }));  // 😎Kun primitive verdier😎
