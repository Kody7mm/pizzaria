# Portfolio

### _By Kody Gordon_
### _Pizzaria_

## Technologies
* HTML
* CSS
* Javascript
* Bootstrap
* jQuery
* Github
* Visual Studio Code

## Description
This website was built to allow user to order a pizza online!

## Setup/Installation Requirement
* [Portfolio](https://github.com/kody7mm/)
* [Project Page](https://github.com/kody7mm/pizzaria)
* Can be cloned from [repository](https://github.com/kody7mm/pizzaria.git)

## Specs
Describe: Pizza() 
Test: Creates pizza object before size and topping choices are applied Code: let userPizza = new Pizza(); Expect: (Pizza.toEqual(Pizza{ [],}));

Describe: Pizza.prototype.calculateSize 
Test: It will add up total cost of a pizza on what size the user chooses. Code: pizza.calculateSize(); 
Expect: (Pizza.pizzaPrice["large"].toEqual([totalCost + 10]));

Describe: Pizza.prototype.calculateToppings 
Test: It will add $1 for each topping chosen in the toppings array. Code: pizza.calculateToppings(); 
Expect: (Pizza.pizzaPrice.toppings["pepperoni"].toEqual([1]));

## Known Bugs
* Design will be improved
* Improvements to floating could be implemented after more experience and practice is had.

## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Contact Information
Kody Gordon (gordon.km89@gmail.com)