const { avgAge, people } = require("../exercise-2");

test("Exercise 2", () => {
  expect(avgAge(people)).toBe(31);
});

test("Exercise 2", () => {
  expect(
    avgAge([
      { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 16 },
      { name: { first: "Ben", last: "Bitdiddle" }, age: 24 },
      { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 30 },
      { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 35 },
      { name: { first: "Louis", last: "Reasoner" }, age: 11 },
      { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 11 },
    ])
  ).toBe(21);
});

test("Exercise 2", () => {
  expect(
    avgAge([
      { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 6 },
      { name: { first: "Ben", last: "Bitdiddle" }, age: 14 },
      { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 20 },
      { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 25 },
      { name: { first: "Louis", last: "Reasoner" }, age: 1 },
      { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 1 },
    ])
  ).toBe(11);
});

test("Exercise 2", () => {
  expect(
    avgAge([
      { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 36 },
      { name: { first: "Ben", last: "Bitdiddle" }, age: 44 },
      { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 50 },
      { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 55 },
      { name: { first: "Louis", last: "Reasoner" }, age: 31 },
      { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 31 },
    ])
  ).toBe(41);
});
