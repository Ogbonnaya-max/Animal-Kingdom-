const readline = require('readline');

// Base class for animals
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Class representing a level of classification
class AnimalClass {
  constructor(name) {
    this.name = name;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }
}

// Class representing an order in classification
class Order {
  constructor(name, bloodType) {
    this.name = name;
    this.bloodType = bloodType;
    this.families = [];
  }

  addFamily(family) {
    this.families.push(family);
  }
}

// Class representing a family in classification
class Family {
  constructor(name) {
    this.name = name;
    this.genuses = [];
  }

  addGenus(genus) {
    this.genuses.push(genus);
  }
}

// Class representing a genus in classification
class Genus {
  constructor(name) {
    this.name = name;
    this.species = [];
  }

  addSpecies(species) {
    this.species.push(species);
  }
}

// Class representing a species, extending Animal
class Species extends Animal {
  constructor(name) {
    super(name);
  }
}

// Class representing the Animal Kingdom
class Kingdom {
  constructor(name) {
    this.name = name;
    this.animalClasses = [];
  }

  addAnimalClass(animalClass) {
    this.animalClasses.push(animalClass);
  }
}

// Function to interact with the classification hierarchy
function interactWithHierarchy(animalia) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // User interaction
  rl.question("Enter a class (Without Backbone / With Backbone): ", (userInput) => {
    userInput = userInput.toLowerCase().trim();

    const selectedClass = animalia.animalClasses.find((animalClass) => animalClass.name.toLowerCase() === userInput);

    if (selectedClass) {
      console.log(`Class: ${selectedClass.name}`);

      selectedClass.orders.forEach((order) => {
        console.log(`- Order: ${order.name} (${order.bloodType})`);
      });
    } else {
      console.log("Invalid input. Please enter 'Without Backbone' or 'With Backbone'.");
    }

    rl.close();
  });
}

// Create instances and build the classification hierarchy
const animalia = new Kingdom("Animalia");

const withoutBackbone = new AnimalClass("Without Backbone");
const withBackbone = new AnimalClass("With Backbone");

const arthropoda = new Order("Arthropoda", "Cold-blooded");
const fish = new Order("Fish", "Cold-blooded");
const amphibia = new Order("Amphibia", "Cold-blooded");
const reptiles = new Order("Reptiles", "Cold-blooded");
const aves = new Order("Aves", "Warm-blooded");
const mammals = new Order("Mammals", "Warm-blooded");

// Build the hierarchy
animalia.addAnimalClass(withoutBackbone);
animalia.addAnimalClass(withBackbone);

withoutBackbone.addOrder(arthropoda);

withBackbone.addOrder(fish);
withBackbone.addOrder(amphibia);
withBackbone.addOrder(reptiles);
withBackbone.addOrder(aves);
withBackbone.addOrder(mammals);

// Call the function to interact with the classification hierarchy
interactWithHierarchy(animalia);
