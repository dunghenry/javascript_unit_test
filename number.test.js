//number
test("number", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); //passed >
    expect(value).toBeGreaterThanOrEqual(3.5); //passed >=
    expect(value).toBe(4); //passed
    expect(value).toEqual(4); //passed
    expect(value).toBeLessThan(5); //passed <
    expect(value).toBeLessThanOrEqual(4.5); //passed <=
  });
  
  test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);           //This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });