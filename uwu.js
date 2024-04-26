const endings = [
  "rawr x3",
  "OwO",
  "UwU",
  "o.O",
  "-.-",
  ">w<",
  "(⑅˘꒳˘)",
  "(ꈍᴗꈍ)",
  "(˘ω˘)",
  "(U ᵕ U❁)",
  "σωσ",
  "òωó",
  "(///ˬ///✿)",
  "(U ﹏ U)",
  "( ͡o ω ͡o )",
  "ʘwʘ",
  ":3",
  ":3", // important enough to have twice
  "XD",
  "nyaa~~",
  "mya",
  ">_<",
  "😳",
  "🥺",
  "😳😳😳",
  "rawr",
  "^^",
  "^^;;",
  "(ˆ ﻌ ˆ)♡",
  "^•ﻌ•^",
  "/(^•ω•^)",
  "(✿oωo)",
];

const replacements = [
  ["small", "smol"],
  ["cute", "kawaii~"],
  ["fluff", "floof"],
  ["love", "luv"],
  ["stupid", "baka"],
  ["what", "nani"],
  ["meow", "nya~"],
];

function selectRandomElement(arr) {
  // generate a random index based on the length of the array
  const randomIndex = Math.floor(Math.random() * arr.length);

  // return the element at the randomly generated index
  return arr[randomIndex];
}

const femboyImages = [
  "https://safebooru.org/samples/2842/sample_39f59364b4284282015068a29b3700ff3b25fb96.jpg?2960934",
  "https://i.redd.it/byiyqu2usfi61.jpg",
  "https://i.pinimg.com/originals/77/99/83/7799833a724f1a32abcb9c7b4011d430.png",
  "https://assets.change.org/photos/3/mx/fk/ZgmXFKfFkXbQiJf-1600x900-noPad.jpg?1620340865",
  "https://images.alphacoders.com/858/858864.jpg",
  "https://img-lb.fireden.net/cm/image/1597/89/1597899491068.jpg",
  "https://img.goodfon.com/original/2560x1600/f/bb/astolfo-sudba-apokrif-fate-apocrypha-paren.jpg",
  "https://i.imgur.com/cDIyDrA.jpg",
  "https://safebooru.org/images/2838/d9e3b80f817ae7f37cc8afb73a032543f3df7dfb.jpg?2956725",
  "https://i.redd.it/hxmz4je6s6721.jpg",
];

function getRandomFemboyImage() {
  return selectRandomElement(femboyImages);
}

function uwuify(message) {
  message = message.toLowerCase();
  // words
  for (const pair of replacements) {
    message = message.replaceAll(pair[0], pair[1]);
  }
  message = message
    .replaceAll(/([ \t\n])n/g, "$1ny") // nyaify
    .replaceAll(/[lr]/g, "w") // [lr] > w
    .replaceAll(/([ \t\n])([a-z])/g, (_, p1, p2) =>
      Math.random() < 0.5 ? `${p1}${p2}-${p2}` : `${p1}${p2}`
    ) // stutter
    .replaceAll(
      /([^.,!][.,!])([ \t\n])/g,
      (_, p1, p2) => `${p1} ${selectRandomElement(endings)}${p2}`
    ); // endings
  return message;
}

module.exports = {
  uwuify,
  getRandomFemboyImage,
};
