function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}
test('test function', () =>{
    expect(() => compileAndroidCode()).toThrow(); //passed
    expect(() => compileAndroidCode()).toThrow(Error); //passed
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK'); //passed
    expect(() => compileAndroidCode()).toThrow(/JDK/); //passed
    // expect(() => compileAndroidCode()).toThrow(/JDKs/); error
})