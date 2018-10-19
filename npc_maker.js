elm = document.getElementById("npc_maker");

const HEAD  = ['plain','cowboy_hat', 'cat_ears',];
const EYES  = ['plain','glowing','glasses',];
const LOWER = ['plain','bandana','bane_mask',];


function arrayOfRands(min = 0, max = 10, length = 1) {
  /* Return an array of size length of random ints */
  let result = [];
  for(let i = 0; i < length; i++) {
    result[i] = Math.floor(Math.random() * max);
  }
  return result;
}


class nonPlayableCharacter { 

  constructor() {
    this.name = 'blah'; // Get these in a better way later
    this.barcode='test'; // Even NPCs must be able to be identified somehow 
    this.tweet = 'Muh feelz';
    
    // Physical attributes to render with image 
    // Using two magic numbers 3 for now since my arrays are that length and I
    // have three arrays;
    // ...must find a better solution later
    let foo = arrayOfRands(0, 3, 3);
    this.portrait = {
      head:HEAD[foo[0]],
      eyes:EYES[foo[1]],
      lower:LOWER[foo[2]],

    }
  };

  drawNPC() {
    // Code to draw stuff
    // <img src='./img/npc.png'> // This needs to be rendered in js
    document.getElementById('profile_pic').innerHTML=
        `<div id="base_npc"><img id='base_npc' src='./img/npc.png'></div>`
      + `<div id="head"><img id='head' src='./img/head/${this.portrait.head}.png'></div>`
      + `<div id="eyes"><img id='eyes' src='./img/eyes/${this.portrait.eyes}.png'></div>`
      + `<div id="lower"><img id='lower' src='./img/lower/${this.portrait.lower}.png'></div>`;
  };

  show() {
    // Generate appropriate HTML 
    return(`Stuff to be added; text and things`);
  };
  
}

function main() {
  bar = new nonPlayableCharacter();
  document.getElementById('intro_text').innerHTML = `<h2>Testing</h2> ${bar.show()}`;
  bar.drawNPC()
}

main();

