/*
- onReady(), 4x handleButton(), render()
yes - update state variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP).
Yes - HP and AP values may not be negative (set to zero, if they would otherwise be negative)
yes - Render state changes to the DOM

yes - Update the text above the attack buttons (eg, "100 AP")
yes - Update the text above the enemy fungus (eg, "100 HP")
yes - If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.
yes - If you run out of AP, the monster wins and humanity is doomed 😢 Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
yes - You may no longer attack, if AP is 0. Give all of the attack buttons a disabled attribute, so they may no longer be used.
*/

$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let AP = 100;

function onReady() {
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM

  // event listener to handle each button of each attacks
  // NOTE: class="attack-btn arcane-scepter"
  // use .arcane-scepter not .attack-btn arcane-scepter
  $(".arcane-scepter").on("click", handleAParcane);
  $(".entangle").on("click", handleAPentangle);
  $(".dragon-blade").on("click", handleAPdragon);
  $(".star-fire").on("click", handleAPstar);
}

// handle button function for each attacks 
function handleAParcane() {
  // update AP state 
  AP -= 12;
  fungusHP -= 14;
  // update HP state 
  console.log("AP count arcane", AP);
  console.log("HP count arcane", fungusHP);
  // AP and HP cannot be negative
  if (AP < 0) {
    AP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }

  // render AP and HP to DOM
  render();
}

function handleAPentangle() {
  AP -= 23;
  fungusHP -= 9;
  console.log("AP count entangle", AP);
  console.log("HP count entangle", fungusHP);

  if (AP < 0) {
    AP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }

  render();
}

function handleAPdragon() {
  AP -= 38;
  fungusHP -= 47;
  console.log("AP count dragon", AP);
  console.log("HP count dragon", fungusHP);

  if (AP < 0) {
    AP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }

  render();
}

function handleAPstar() {
  AP -= 33;
  fungusHP -= 25;
  console.log("AP count star", AP);
  console.log("HP count star", fungusHP);

  if (AP < 0) {
    AP = 0;
  }
  if (fungusHP < 0) {
    fungusHP = 0;
  }

  render();
}

// render function
function render() {
  // update meter in div value
  $("#ap-meter").val(`${AP}`);
  $("#hp-meter").val(`${fungusHP}`);
  // update text in div to value
  $(".ap-text").text(`${AP}`);
  $(".hp-text").text(fungusHP);

  // update CSS class
  if (AP <= 0) {
    $(".freaky-fungus").removeClass("walk").addClass("jump");
    // disable button when AP and fungusHP count = 0
    // NOTE: class= attack-btn arcane-scepter
    // use .attack-btn not .attack-btn arcane-scepter
    $(".attack-btn").prop("disabled", true);
  } else if (fungusHP <= 0) {
    $(".freaky-fungus").removeClass("walk").addClass("dead");
    $(".attack-btn").prop("disabled", true);
  }
}
