function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("peanut butter");
      // reject("error");
    }, 1000);
  });
}

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

//async await
test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the fetch data", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});

//.resolves/.rejects
test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});
