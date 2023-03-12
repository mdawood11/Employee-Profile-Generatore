const intern = require("../lib/intern");

test("Cab set school via constructor", function () {
  const testResult = "UCD";
  const emp = new intern("Mohamad", 1, "test@test.com", testResult);
  expect(emp.school).toBe(testResult);
});

test("getRole() should return 'intern'", function () {
  const testResult = "intern";
  const emp = new intern("Mohamad", 1, "test@test.com", "UCD");
  expect(emp.getRole()).toBe(testResult);
});

test("Can get school via getSchool()", function () {
  const testResult = "UCD";
  const emp = new intern("Mohamad", 1, "test@test.com", testResult);
  expect(emp.getSchool()).toBe(testResult);
});
