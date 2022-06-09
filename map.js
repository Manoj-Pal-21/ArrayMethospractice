// map

const numbers = [1, 2, 3, 4, 5];

const numberDouble = numbers.map((value, index) => {
  return value + index;
});

console.log(numberDouble);

// Ex : 2

const students = [
  {
    Name: "Manoj",
    Age: 22,
    id: 3,
    Language: "English",
    Gender: "Male",
  },
  {
    Name: "Aadarsh",
    Age: 21,
    id: 1,
    Language: "English",
    Gender: "Male",
  },
];

const Data = [
  {
    Name: "Rahul",
    Age: 21,
    id: 5,
    Language: "English",
    Gender: "Male",
  },
  {
    Name: "Ajit",
    Age: 21,
    id: 3,
    Language: "English",
    Gender: "Male",
  },
];

const total = Data.map((data) => students.push(data));
console.log(students);
