// write a dinosaur base class, which should have features
// that are shared across all dinosaur
class Dinosaur {
  constructor (name, legCount = 4, diet = "plants") {
    this.name = name;
    this.legCount = legCount;
    this.diet = diet;
  }

  describe () {
    console.log(
      `${this.name}:`
        + `\n- diet: ${this.diet}`
        + `\n- legCount: ${this.legCount}`
    );
  }
}

// Create a brochiosaurus class that extends/inherits from Dinosaur
class Brochiosaurus extends Dinosaur {
  constructor (name) {
    super(name);
  }

  describe () {
    console.log("meh, not feeling like it..well actually, i guess...");
    super.describe();
  }

  tellMeAboutYourLongNeck () { console.log("my neck is long"); }
}

// Create a TRex class that extends/inherits from Dinosaur
class TRex extends Dinosaur {
  constructor (name) {
    super(name, 2, "meat");
  }

  roar () { console.log(`${this.name} goes ROAR`); }
}

// pterodactyl class
class Pterodactyl extends Dinosaur {
  constructor (name, wingspan) {
    super(name, 2, "fish");

    this.wingspan = wingspan;
  }

  fly () {
    console.log(
      `${this.name} soars into the air with it's `
        + `${this.wingspan}m spanning wings`
    );
  }
}





const broch1 = new Brochiosaurus("jingy");
broch1.tellMeAboutYourLongNeck();
broch1.describe();

console.log("\n\n");
const dino1 = new Dinosaur("apocalypto", 9, "fish");
dino1.describe();

console.log("\n\n");
const trex1 = new TRex("phil");
trex1.describe();
trex1.roar();

console.log("\n\n");
const pterodactyl1 = new Pterodactyl("shauna", 10);
pterodactyl1.describe();
pterodactyl1.fly();
