function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "pesto", ["parmesan", "ricotta"], ["chicken", "artichokes", "spinach"]);
var pizza4 = pizzaOven("stuffed crust", "bbq", ["cheddar", "gouda"], ["bacon", "pineapple", "jalapenos"]);


function randomPizza() {
    var crustTypes = ["thin crust", "hand tossed", "deep dish", "stuffed crust"];
    var sauceTypes = ["marinara", "pesto", "bbq", "alfredo"];
    var cheeses = ["mozzarella", "cheddar", "feta", "parmesan"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "artichokes", "spinach", "bacon", "pineapple", "jalapenos"];

    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheeses = [cheeses[Math.floor(Math.random() * cheeses.length)]];
    var randomToppings = [toppings[Math.floor(Math.random() * toppings.length)], toppings[Math.floor(Math.random() * toppings.length)]];

    return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

var randomPizza1 = randomPizza();
var randomPizza2 = randomPizza();
var randomPizza3 = randomPizza();
var randomPizza4 = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(randomPizza1);
console.log(randomPizza2);
console.log(randomPizza3);
console.log(randomPizza4);