var songList = [
  "A Pirate Looks At Forty",
  "Ballad of Spider John",
  "He Went To Paris",
  "Cliches",
  "Dallas",
  "Boat Drinks",
  "Margaritaville",
];

let randomSong = songList[Math.floor(Math.random() * songList.length)];
let unknown = randomSong.split("");
let underscores = [];
let guess;

/*-------------------- Function that sets up a random song name and assigns it to a variable. It then will display a number of underscores equal to the length of the song name ----------------------*/

function mysteryWordGenerator() {
  unknown.forEach((x) => {
    if (x != " ") {
      underscores.push("_");
    } else {
      underscores.push(" ");
    }
  });

  console.log(underscores);
  document.getElementById("mysteryWord").innerHTML = underscores.join("");
}

/*-------------------- Function that logs any key pressed to the "guess" variable, it then executes the letterCheck function -------------------*/

document.onkeyup = function listener(event) {
  guess = event.key;
  console.log(guess);
  letterCheck();
};

/*------------------- Compares the guessed letter to the unknown array and determines if there are matches, it then assigns value to underscores based on index ----------------*/

function letterCheck() {
  unknown.forEach((x, i) => {
    if (guess.localeCompare(unknown[i], "en", { sensitivity: "base" }) == 0) {
      underscores[i] = unknown[i];
    }
    document.getElementById("mysteryWord").innerHTML = underscores.join("");
  });
}

mysteryWordGenerator();
