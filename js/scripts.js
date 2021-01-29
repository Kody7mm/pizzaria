function Pizzaria() {
  this.currendId = 0;
}

Pizzaria.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId; // remove later
}

// Business logic for pizzaria
function reciept(size, cost, toppings) {
  this.size = size; 
  this.cost = cost; 
  this.toppings = toppings;
}
function size(small, medium, large, family) {
  this.small = small;
  this.medium = medium;
  this.large = large;
  this.family = family;
}
function toppings(pepperoni, cheese, bacon, olives, sausage, jalapenos) {
  this.sausage = sausage;
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
  this.onions = onions;
  this.olives = olives;
  this.jalapenos = jalapenos;
  this.bacon = bacon;
} 

reciept.prototype.toppings = function() {
  this.price = 5.00;
  if (this.pepperoni === "pepperoni") {
    this.price += 1.00;
  }
  if (this.bacon === "bacon") {
    this.price += 1.00;
  }
  if (this.olives === "olives") {
    this.price += 1.00;
  }
  if (this.sausage === "sausage") {
    this.price += 1.00;
  }
  if (this.jalapenos === "jalapenos") {
    this.price += 1.00;
};

reciept.prototype.size = function() {
  this.price = 5.00;
  if (this.small === "small") {
    this.price += 3.00;
  }
  if (this.medium === "medium") {
    this.price += 6.00;
  }
  if (this.large === "large") {
    this.price += 9.00;
  }
  if (this.family === "family") {
    this.price += 12.00;
  }
};