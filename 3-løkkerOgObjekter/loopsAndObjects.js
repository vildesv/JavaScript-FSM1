/******************************************************************************
 ------------------------------------
!LES OPPGAVETEKSTEN NØYE! 
 ------------------------------------
*******************************************************************************

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres på det objektet (hint: bruk `continue`-nøkkelordet).
- Lag en ny nøkkel på hvert person-objekt kalt "city" og sett verdien til en random by fra `cities`-arrayen.
- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for menn og "Ms." for kvinner.
- Øk alderen med 2.
- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

*******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];
let combinedAge = 0;

for (let i = 0; i < people.length; i++) {
	const person = people[i];
	if (person.name === "Otto") continue;

	person.city = cities[Math.floor(Math.random() * cities.length)];

	person.title = person.male ? "Mr." : "Ms.";

	person.age += 2;

	person.hobbies.unshift("coding");

	combinedAge += person.age;
}

let averageAge = combinedAge / (people.length - 1);
console.log(people);
console.log("Combined age =", combinedAge);
console.log("Average age =", averageAge);


/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(antall terninger vi kaster).

Eksempel: 
diceRoller(4) -> [4, 1, 2, 6]

diceRoller(6) -> [5, 5, 6, 2, 3, 4]

******************************************************************************/

// Skriv koden for oppgave 2 her

function diceRoller(number, sides = 6) {
	const rolls = [];

	for (let i = 0; i < number; i++) {
		rolls.push(Math.floor(Math.random() * sides) + 1);
	}

	return rolls;
}

console.log(diceRoller(4));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Skriv en løkke som itererer gjennom stringene og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner det.

*******************************************************************************/    

function cleanAndCombine(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].trim().toLowerCase();
	}

	return arr.join(" ");
}

console.log(cleanAndCombine([" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]));

/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`.

*******************************************************************************/    

function doubleSwap(string, charA, charB) {
	let result = '';
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (char === charA) {
			result += charB;
		} else if (char === charB) {
			result += charA;
		} else {
			result += char;
		}
	}
	return result;
}

console.log(doubleSwap("this is a string", "i", "s"));

/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive;

******************************************************************************/    

const greetings = [
	"Hello, how are you today?",
	"Diciamo ciao prima di andare!",
	"Salut, ça va bien?",
	"Kannst du mich hören? Hallo!",
	"Hva er regex?",
	"Nos saludamos con un alegre hola.",
	"Ona pomachała i powiedziała cześć z uśmiechem.",
	"Good afternoon gentlemen!"
];

// Skriv koden for oppgave 5 her

function helloChecker(str) {
	const words = str.toLowerCase().split(/\W+/);
	const greets = {
		hello: "engelsk",
		ciao: "italiensk",
		salut: "fransk",
		hallo: "tysk",
		hola: "spansk",
		czesc: "polsk",
	};

	for (let word of words) {
		if (greets[word]) {
			return `HELLO oppdaget på ${greets[word]}.`;
		}
	}

	return "Ingen HELLO oppdaget.";
}

greetings.forEach((item) => console.log(helloChecker(item)));
