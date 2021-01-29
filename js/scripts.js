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


reciept.prototype.cost = function() {
  this.price = 5.00;
  if (this.time === "small") {
    this.price += 3.00;
  }
  if (this.age === "medium") {
    this.price += 4.00;
  }
  if (this.newMovie === "large") {
    this.price += 5.00;
  }
};