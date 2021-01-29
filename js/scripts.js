// Business logic for pizzaria
function pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

reciept.prototype.toppings = function () {
  if (this.topping1 === "topping1") {
    this.price += 1.00;
  }
  if (this.topping2 === "topping2") {
    this.price += 1.00;
  }
  if (this.topping3 === "topping3") {
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
  };

  Pizza.prototype.totalCost = function () {
    return (this.sizePrice + this.toppingOne + this.toppingTwo)
  }

  //business logic for users

