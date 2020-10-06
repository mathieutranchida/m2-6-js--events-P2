const { fullName, people } = require("../exercise-3");

test("Exercise 3", () => {
  expect(fullName(people)).toStrictEqual([
    "Alyssa P. Hacker",
    "Ben Bitdiddle",
    "Eva Lu Ator",
    "Lem E. Tweakit",
    "Louis Reasoner",
    "Shahan Haig Krakirian",
  ]);
});

test("Exercise 3", () => {
  expect(
    fullName([
      {
        name: { first: "Mathieu", middle: "Robin", last: "Tranchida" },
        age: 22,
      },
      { name: { first: "Laurent", last: "Tranchida" }, age: 51 },
      {
        name: { first: "Marion", middle: "Audrey", last: "Tranchida" },
        age: 21,
      },
      { name: { first: "Sophie", last: "Tranchida" }, age: 52 },
    ])
  ).toStrictEqual([
    "Mathieu Robin Tranchida",
    "Laurent Tranchida",
    "Marion Audrey Tranchida",
    "Sophie Tranchida",
  ]);
});

test("Exercise 3", () => {
  expect(
    fullName([
      { name: { first: "Antoine", last: "Clement" }, age: 21 },
      { name: { first: "Jacques", last: "François" }, age: 34 },
      { name: { first: "Douglas", middle: "Ken", last: "Kurt" }, age: 40 },
      { name: { first: "Franklin", middle: "De", last: "La Vega" }, age: 45 },
    ])
  ).toStrictEqual([
    "Antoine Clement",
    "Jacques François",
    "Douglas Ken Kurt",
    "Franklin De La Vega",
  ]);
});

test("Exercise 3", () => {
  expect(
    fullName([
      { name: { first: "Jean", last: "Neymar" }, age: 21 },
      { name: { first: "Suzy", last: "Wolff" }, age: 34 },
      { name: { first: "Lewis", middle: "E.", last: "Hamilton" }, age: 40 },
      {
        name: { first: "Valterri", middle: "Richard", last: "Bottas" },
        age: 45,
      },
    ])
  ).toStrictEqual([
    "Jean Neymar",
    "Suzy Wolff",
    "Lewis E. Hamilton",
    "Valterri Richard Bottas",
  ]);
});
