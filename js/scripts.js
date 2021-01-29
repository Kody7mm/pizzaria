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
  this.pepperoni = pepperoni;
  this.cheese = cheese;
  this.bacon = bacon;
  this.olives = olives;
  this.sausage = sausage;
  this.jalapenos = jalapenos;
} 

reciept.prototype.toppings = function() {
  this.toppings = this.size + toppings;
  if ()
}

reciept.prototype.pizzaCost = function() {
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