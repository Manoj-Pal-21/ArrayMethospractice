// reduce

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(sum, 0);
function sum(accumulator, value) {
  return accumulator + value;
}

console.log(total);

// Ex : 2

const max = numbers.reduce(callback, -Infinity);
function callback(acc, value) {
  if (acc > value) {
    return acc;
  } else {
    return value;
  }
}

console.log(max);

// Ex : 3

const store = [
  {
    Product: "laptop",
    Value: 1000,
    Count: 3,
  },
  {
    Product: "desktop",
    Value: 1500,
    Count: 4,
  },
  {
    Product: "mobile",
    Value: 500,
    Count: 10,
  },
];

const totalValueStore = store.reduce(
  (acc, item) => acc + item.Value * item.Count,
  0
);
console.log(totalValueStore);

// Ex : 4

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const result = array.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(result);
