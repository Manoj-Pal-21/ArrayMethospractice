// filter

const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);
function isEven(value) {
  return value % 2 == 0;
}

console.log(even);




const odd = numbers.filter((value) => {
  return value % 2;
});
console.log(odd);

// Ex : 2

const people = [
  {
    Name: "Manoj",
    Age: 22,
  },
  {
    Name: "Aadarsh",
    Age: 21,
  },
  {
    Name: "Rahul",
    Age: 21,
  },
];

const adults = people.filter((person) => person.Age >= 22);
console.log(adults);

// Ex : 3

const number = [1, 2, 2, 3, 4, 5, 4, 3, 6];

const nums = number.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(nums);
