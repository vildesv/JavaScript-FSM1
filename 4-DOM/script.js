// Liste over hobbies
const hobbies = [
  {
    name: "Fotografering",
    description: "Fang vakre øyeblikk!",
    image: "./img/photographer.avif"
  },
  {
    name: "Matlaging",
    description: "Bli en mesterkokk på kjøkkenet!",
    image: "./img/cooking.avif"
  },
  {
    name: "Maling",
    description: "Slipp kreativiteten løs!",
    image: "./img/painting.avif"
  },
  {
    name: "Hagearbeid",
    description: "Dyrk vakre blomster og urter!",
    image: "./img/gardening.avif"
  },
  {
    name: "Dans",
    description: "Bli en stjerne på dansegulvet!",
    image: "./img/dancing.avif"
  }
];

// Hent elementene vi vil manipulere
const generateBtn = document.getElementById("generate"); // Knapp for å generere
const hobbyName = document.getElementById("hobby-name"); // Overskrift for hobby-navn
const hobbyDescription = document.getElementById("hobby-description"); // Avsnitt for beskrivelse
const hobbyImage = document.getElementById("hobby-img"); // Bilde som viser hobbyen

// Funksjon for å hente en tilfeldig hobby
function generateHobby(){
  // Velg en tilfeldig indeks
  const random = Math.floor(Math.random() * hobbies.length);
  
  // Velg riktig hobby basert på indeks
  const chosen = hobbies[random];
  
  // Oppdater teksten og bildet på siden
  hobbyName.textContent = chosen.name;
  hobbyDescription.textContent = chosen.description;
  hobbyImage.src = chosen.image;
  hobbyImage.alt = chosen.name;
}

// Legg til eventlistener på knappen slik at den utfører generateHobby når vi klikker
generateBtn.addEventListener("click", generateHobby);
