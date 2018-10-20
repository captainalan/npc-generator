/* Optional items to randomly render on base character */
const WARDROBE = {
  head:['plain','cowboy_hat', 'cat_ears',],
  eyes:['plain','glowing','glasses',],
  lower:['plain','bandana','bane_mask',],
}

function randomWardrobe(wardrobe){
  /* Expects an object structured like the WARDROBE const above.
   * Returns a an array of indices, randomly selecting items from that object.*/
  let result = {};
  let keys = Object.keys(wardrobe);
  keys.forEach( key => {
    result[key] = Math.floor(Math.random() * wardrobe[key].length);
  });
  return result;
}

class nonPlayableCharacter { 

  constructor() {

    this.portrait = {}
    let myWardrobe = randomWardrobe(WARDROBE);
    let myKeys = Object.keys(myWardrobe);

    myKeys.forEach( key => {
      this.portrait[key] = WARDROBE[key][myWardrobe[key]]
    });

  };

  drawNPC() {
    document.getElementById('profile_pic').innerHTML=
        `<div id="base_npc"><img id='base_npc' src='./img/npc.png'></div>`
      + `<div id="head"><img id='head' src='./img/head/${this.portrait.head}.png'></div>`
      + `<div id="eyes"><img id='eyes' src='./img/eyes/${this.portrait.eyes}.png'></div>`
      + `<div id="lower"><img id='lower' src='./img/lower/${this.portrait.lower}.png'></div>`;
  };
}

function main() {
  wojak = new nonPlayableCharacter();
  wojak.drawNPC()
}

main();
