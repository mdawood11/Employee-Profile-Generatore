const manager = require("../lib/manager");

test("Can set office number via constructor argument", function () {
  const testValue = 100;
  const emp = new manager("Mohamad", 1, "test@test.com", testValue);
  // testing a value along with the matcher function toBe testValue
  expect(emp.officeNumber).toBe(testValue);
});

test('getRole() should return "manager"', function () {
  const testValue = "manager";
  const emp = new manager("Mohamad", 1, 100);
  expect(emp.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", function () {
  const testValue = 100;
  const emp = new manager("Mohamad", 1, "test@test.com", testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
});
