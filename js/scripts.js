function Pizzaria() {
  this.currendId = 0;
}

Pizzaria.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId; // remove later
}

// Business logic for pizzaria
function reciept(size, cost, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}
function size(small, medium, large, family) {
  this.small = small;
  this.medium = medium;
  this.large = large;
  this.family = family;
}
function toppings(sausage, pepperoni, mushrooms, onions, olives, jalapenos, bacon) {
  this.sausage = sausage;
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
  this.onions = onions;
  this.olives = olives;
  this.jalapenos = jalapenos;
  this.bacon = bacon;
  this.toppingTotal = sausage + pepperoni + mushrooms + onions + olives + jalapenos + bacon;
}

reciept.prototype.toppings = function () {
  if (this.sausage === "sausage") {
    this.price += 1.00;
  }
  if (this.pepperoni === "pepperoni") {
    this.price += 1.00;
  }
  if (this.mushrooms === "mushrooms") {
    this.price += 1.00;
  }
  if (this.onions === "onions") {
    this.price += 1.00;
  }
  if (this.olives === "olives") {
    this.price += 1.00;
  }
  if (this.jalapenos === "jalapenos") {
    this.price += 1.00;
  }
  if (this.bacon === "bacon") {
    this.price += 1.00;
  }

  reciept.prototype.size = function () {
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

  Pizza.prototype.price = function(toppings, size){
    let toppingPrice = toppings.length; 
    let sizePrice = size.length;
    return 5 + toppingPrice + sizePrice;

  //business logic for users

