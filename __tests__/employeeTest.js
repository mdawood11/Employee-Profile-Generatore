const employee = require("../lib/employee");

test("Can instantiate employee instance", function () {
  const emp = new employee();
  expect(typeof emp).toBe("object");
});

test("Can set name via constructor arguments", function () {
  const name = "Dawood";
  const emp = new employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id via constructor argument", function () {
  const testValue = 100;
  const emp = new employee("Mohamad", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email via constructor argument", function () {
  const testValue = "Dawood";
  const emp = new employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id via getId()", function () {
  const testValue = 100;
  const emp = new employee("Mohamad", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email via getEmail()", function () {
  const testValue = "test@test.com";
  const emp = new employee("Mohamad", 1, testValue);
});

test("getRole() should return 'employee'", function () {
  const testValue = "employee";
  const emp = new employee("Dawood", 1, "test@test.com");
  expect(emp.getRole()).toBe(testValue);
});
