var songList = [
  "A Pirate Looks At Forty",
  "Ballad of Spider John",
  "He Went To Paris",
  "Cliches",
  "Dallas",
  "Boat Drinks",
  "Margaritaville",
];

//document.getElementById('mysteryWord').innerHTML = randomSong;

/*-------------------- Function that sets up a random song name and assigns it to a variable. It then will display a number of underscores equal to the length of the song name ----------------------*/
function mysteryWordGenerator() {

  let randomSong = songList[Math.floor(Math.random() * songList.length)];
  let unknown = randomSong.split("");
  let underscores = [];

  unknown.forEach((x) => {
    if (x != " ") {
      underscores.push("_");
    } else {
      underscores.push(" ");
    }
  });

  console.log(underscores);
  document.getElementById("mysteryWord").innerHTML = underscores;
}

mysteryWordGenerator();

// const items = ['item1', 'item2', 'item3']
// const copyItems = []

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i])
// }

// // after
// items.forEach(function(item){
//   copyItems.push(item)
// })

// function foreach (arr) {
//     for(arr.length) {
//         // return value at index
//     }
// }
