/*
Handle click events:

When you click an attack button:

update state variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP).
See Attacks below, for the AP and HP values of each attack
State may be held in one our more variables of your choosing
HP and AP values may not be negative (set to zero, if they would otherwise be negative)
Render state changes to the DOM

Update the text above the attack buttons (eg, "100 AP")
Update the text above the enemy fungus (eg, "100 HP")
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

  $(".arcane-scepter").on("click", handleAParcane);
  $(".entangle").on("click", handleAPentangle);
  $(".dragon-blade").on("click", handleAPdragon);
  $(".star-fire").on("click", handleAPstar);
}

function handleAParcane() {
  AP -= 12;
  fungusHP -= 14;
  console.log("AP count arcane", AP);
  console.log("HP count arcane", fungusHP);
  //render();
}

function handleAPentangle() {
  AP -= 23;
  fungusHP -= 9;
  console.log("AP count entangle", AP);
  console.log("HP count entangle", fungusHP);
  render();
}

function handleAPdragon() {
  AP -= 38;
  fungusHP -= 47;
  console.log("AP count dragon", AP);
  console.log("HP count dragon", fungusHP);
  render();
}

function handleAPstar() {
  AP -= 33;
  fungusHP -= 25;
  console.log("AP count star", AP);
  console.log("HP count star", fungusHP);
  render();
}

function render() {
  $(".ap-text").text(`${AP}`);
  $(".hp-text").text(fungusHP);
  $("#ap-meter").val(AP);
  $("#hp-meter").val(`${fungusHP}`);

  // button distribute
  if (AP <= 0) {
    $(".freaky-fungus").removeClass("walk").addClass("jump");
// disable button 
    $(".attack-btn").prop("disabled", true);
  } else if (fungusHP <= 0) {
    $(".freaky-fungus").removeClass("walk").addClass("dead");
    $(".attack-btn").prop("disabled", true);
  }
}
