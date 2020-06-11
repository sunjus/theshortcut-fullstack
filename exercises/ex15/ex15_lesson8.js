function rangeFruits(fruits,a,b) {
  return fruits.filter(e => (e >= a && e <= b))
}

function rangeNumbers(numbers,a,b) {
    return numbers.filter(e => (e >= a && e <= b))    
}

let numbers = [3,2,4,5,8,9,1];
let fruits = ["apple", "banana", "cantaloupe", "durian", "jackfruit"];

let smallNumbers = rangeFruits(fruits,"c","z");
let bigFruits = rangeNumbers(numbers,1,5);

console.log(smallNumbers);
console.log(bigFruits);