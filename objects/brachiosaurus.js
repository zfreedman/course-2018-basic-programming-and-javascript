class Brachiosaurus {
  constructor (name, level, height) {
    this.name = name;
    this.level = level;
    this.height = height;
  }

  roar () { console.log("ROARRRR"); }

  levelUp (addedLevels) {
    const oldLevel = this.level;
    this.level += addedLevels;
    console.log(
      `${this.name} the Brachiosaurus has leveled up from level `
        + `${oldLevel} to level ${this.level}`
    );
  }
}

const dinoPhil = new Brachiosaurus("phil", 999, 12);
dinoPhil.roar();
dinoPhil.levelUp(3);
dinoPhil.roar();
