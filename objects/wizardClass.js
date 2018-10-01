// define a wizard class which we can use to spin up wizard instances
class Wizard {
  constructor (name, magicType) {
    this.name = name;
    this.magicType = magicType;
  }

  describeYourself () {
    console.log(
      `My name is ${this.name} and I use ${this.magicType} magic.`
    );
  }
}

// creating instances using the class
const wizardSteve = new Wizard("steve", "ice");
const wizardJoanna = new Wizard("joanna", "explosion");
const wizardVlad = new Wizard("fake wizard vlad", "air");

wizardVlad.describeYourself();
