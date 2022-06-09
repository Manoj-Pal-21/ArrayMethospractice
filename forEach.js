// forEach method

// Ex : 1

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((value, index) => {
  console.log(`Index ${index} : ${value}`);
});

// Ex : 2

let sum = 0;

numbers.forEach((item) => {
  sum += item;
});

console.log(`The sum of No. = ${sum}`);

// Ex : 3

const letters = ["a", "b", "b", "c", "a", "a"];

let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);
