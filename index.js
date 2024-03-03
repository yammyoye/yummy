class Yummy {
    constructor(name, cuisine) {
      this.name = name || 'Delicious Dish';
      this.cuisine = cuisine || 'Unknown Cuisine';
      this.tasteRating = 10; // Taste rating out of 10
    }
  
    describeTaste() {
      console.log(`${this.name} from ${this.cuisine} is incredibly yummy with a taste rating of ${this.tasteRating}/10!`);
    }
  
    displayInfo() {
      console.log(`Yummy Details: ${this.name} | Cuisine: ${this.cuisine} | Taste Rating: ${this.tasteRating}/10`);
    }
  }
  
  // Example usage
  const tastyBurger = new Yummy('Cheeseburger', 'American');
  const flavorfulCurry = new Yummy('Chicken Curry', 'Indian');
  
  tastyBurger.describeTaste();
  flavorfulCurry.displayInfo();
  