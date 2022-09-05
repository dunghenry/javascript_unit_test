function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(1);
      // reject("error");
    }, 1000);
  });
}

test("the fetch", async() => {
  expect.assertions(1);
  try {
    const data = await fetchData();
    expect(data).toEqual(1);
  } catch (e) {
    expect(e).toMatch('error');
  }
});


function fetch(back){
    return back(null, 'Hello');
}

test('test callbacks', (done) =>{
    console.log(done) //function
    function callback(error,data){
        console.log(error);
        console.log(data);
        if (error) {
            done(error);
            return;
          }
        try {
            expect(data).toBe('Hello');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetch(callback)
})