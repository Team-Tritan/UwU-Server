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

function selectRandomElement(arr: any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function uwuify(message: string) {
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

export { uwuify };
