const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk"); //passed
//   expect(shoppingList).toContain("milkl"); //error
});
