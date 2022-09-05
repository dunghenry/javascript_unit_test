// toBeNull, toBeUndefined, todeDefined, toBeTruthy, toBeFalsy
test("null", () => {
  const a = null;
  expect(a).toBeNull(); // passed
  //expect(a).toBeUndefined();
  //expect(a).todeDefined();
});

test("zero", () => {
  const a = 0;
  expect(a).toBeFalsy(); //passed
});

test("truthy", () => {
  const a = true;
  expect(a).toBeTruthy(); //passed
});

test("undefined", () => {
  let a;
  expect(a).toBeUndefined(); //passed
});
test("defined", () => {
  let x = 1;
  expect(x).toBeDefined(); // passed
});
