// we need to summon a fireball, and we can
// sacrifice 2 mana every second...
// the fireball requires 20 mana
let totalMana = 100;
let manaPerSecond = 2;
let fireBallMana = 0;
const MANA_PER_FIREBALL = 20;

console.log(`current fireball mana: ${fireBallMana}`);

while (fireBallMana < MANA_PER_FIREBALL) {
  fireBallMana += 2;
  console.log(`current fireball mana: ${fireBallMana}`);
}

console.log("CASTING A MIGHTY A GLORIOUS FIREBALL!!");
