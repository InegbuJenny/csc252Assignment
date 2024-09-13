// DECLARING AND INITIALIZING AN ARRAY OF COUNTRIES
let beverages = ["Coffee", "Tea", "Orange JUice", "Milk", "Soda"];
console.log(beverages);

//DECLARING ANS INITIALIZING A TWO DIMENSIONAL ARRAY OF FRUIT CATEGORIES
let fruitCategories = [
    ["apple", "banana", "cherry"], // Category 1: Common fruits
    ["mango", "papaya", "pineapple"], // Category 2: Tropical fruits
    ["blueberry", "strawberry", "raspberry"], // Category 3: Berries
];
console.log(fruitCategories);

//TRANVERSIN THROUGH AN ARRAY OF FRUITS
let fruits = ["apple", "banana", "cherry", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//CONCATENATING THROUGH AN ARRAY OF FRUIT CATEGORIES
let newNames = ["my", "name", "is", "Jennifer"];
let result = newNames.join(", ");
console.log(result);
